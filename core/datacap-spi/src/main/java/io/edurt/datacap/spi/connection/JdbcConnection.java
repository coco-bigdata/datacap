package io.edurt.datacap.spi.connection;

import io.edurt.datacap.spi.model.Response;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ObjectUtils;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Enumeration;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.stream.Collectors;

@Slf4j
public class JdbcConnection
        extends io.edurt.datacap.spi.connection.Connection
{
    private JdbcConfigure jdbcConfigure;
    private Response response;
    private Connection connection;

    public JdbcConnection(JdbcConfigure jdbcConfigure, Response response)
    {
        super(jdbcConfigure, response);
    }

    protected String formatJdbcUrl()
    {
        StringBuffer buffer = new StringBuffer();
        buffer.append("jdbc:");
        buffer.append(this.jdbcConfigure.getJdbcType());
        if (jdbcConfigure.getJdbcType().equals("influxdb")) {
            buffer.append(":");
        }
        else {
            buffer.append("://");
        }
        buffer.append(this.jdbcConfigure.getHost());
        buffer.append(":");
        buffer.append(this.jdbcConfigure.getPort());
        if (this.jdbcConfigure.getDatabase().isPresent()) {
            if (jdbcConfigure.getJdbcType().equals("solr")) {
                buffer.append("/?collection=");
            }
            else {
                buffer.append("/");
            }
            buffer.append(this.jdbcConfigure.getDatabase().get());
        }
        if (this.jdbcConfigure.getSsl().isPresent()) {
            buffer.append(String.format("?ssl=%s", this.jdbcConfigure.getSsl().get()));
        }
        if (this.jdbcConfigure.getEnv().isPresent()) {
            Map<String, Object> env = this.jdbcConfigure.getEnv().get();
            List<String> flatEnv = env.entrySet()
                    .stream()
                    .map(value -> String.format("%s=%s", value.getKey(), value.getValue()))
                    .collect(Collectors.toList());
            if (!this.jdbcConfigure.getSsl().isPresent()) {
                buffer.append("?");
            }
            else {
                if (this.jdbcConfigure.getIsAppendChar()) {
                    buffer.append("&");
                }
            }
            buffer.append(String.join("&", flatEnv));
        }
        return buffer.toString();
    }

    protected Connection openConnection()
    {
        try {
            this.jdbcConfigure = (JdbcConfigure) getConfigure();
            this.response = getResponse();

            // Remove org.apache.pinot.client.PinotDriver and net.suteren.jdbc.influxdb.InfluxDbDriver
            Enumeration<Driver> drivers = DriverManager.getDrivers();
            while (drivers.hasMoreElements()) {
                Driver driver = drivers.nextElement();
                if (driver instanceof org.apache.pinot.client.PinotDriver
                        || driver instanceof net.suteren.jdbc.influxdb.InfluxDbDriver) {
                    DriverManager.deregisterDriver(driver);
                    log.info("Deregistered driver {}", driver);
                }
            }

            // Manually loading and registering the driver
            Driver driver = (Driver) Class.forName(this.jdbcConfigure.getJdbcDriver())
                    .getDeclaredConstructor()
                    .newInstance();
            DriverManager.registerDriver(driver);

            String url = formatJdbcUrl();
            log.info("Connection driver {}", this.jdbcConfigure.getJdbcDriver());
            log.info("Connection url {}", url);
            if (this.jdbcConfigure.getUsername().isPresent() && this.jdbcConfigure.getPassword().isPresent()) {
                log.info("Connection username with {} password with {}", this.jdbcConfigure.getUsername().get(), "***");
                this.connection = DriverManager.getConnection(url, this.jdbcConfigure.getUsername().get(), this.jdbcConfigure.getPassword().get());
            }
            else {
                log.info("Connection username and password not present");
                Properties properties = new Properties();
                if (jdbcConfigure.getUsername().isPresent()) {
                    properties.put("user", jdbcConfigure.getUsername().get());
                }
                this.connection = DriverManager.getConnection(url, properties);
            }
            response.setIsConnected(Boolean.TRUE);
        }
        catch (Exception ex) {
            log.error("Connection failed ", ex);
            response.setIsConnected(Boolean.FALSE);
            response.setMessage(ex.getMessage());
        }
        return this.connection;
    }

    public void destroy()
    {
        if (ObjectUtils.isNotEmpty(this.connection)) {
            try {
                this.connection.close();
            }
            catch (SQLException ex) {
                log.error("Connection close failed ", ex);
            }
        }
    }
}
