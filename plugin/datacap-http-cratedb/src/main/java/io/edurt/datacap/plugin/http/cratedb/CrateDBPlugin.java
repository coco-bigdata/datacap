package io.edurt.datacap.plugin.http.cratedb;

import edu.umd.cs.findbugs.annotations.SuppressFBWarnings;
import io.edurt.datacap.spi.Plugin;
import io.edurt.datacap.spi.PluginType;
import io.edurt.datacap.spi.adapter.Adapter;
import io.edurt.datacap.spi.connection.HttpConfigure;
import io.edurt.datacap.spi.connection.HttpConnection;
import io.edurt.datacap.spi.model.Configure;
import io.edurt.datacap.spi.model.Response;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang3.ObjectUtils;

@Slf4j
@SuppressFBWarnings(value = {"EI_EXPOSE_REP"})
public class CrateDBPlugin
        implements Plugin
{
    private HttpConfigure httpConfigure;
    private HttpConnection connection;
    private Response response;

    @Override
    public String name()
    {
        return "CrateDB";
    }

    @Override
    public String description()
    {
        return "Integrate CrateDB data sources";
    }

    @Override
    public PluginType type()
    {
        return PluginType.HTTP;
    }

    @Override
    public void connect(Configure configure)
    {
        try {
            this.response = new Response();
            this.httpConfigure = new HttpConfigure();
            BeanUtils.copyProperties(this.httpConfigure, configure);
            this.connection = new CrateDBConnection(this.httpConfigure, this.response);
        }
        catch (Exception ex) {
            this.response.setIsConnected(Boolean.FALSE);
            this.response.setMessage(ex.getMessage());
        }
    }

    @Override
    public Response execute(String content)
    {
        if (ObjectUtils.isNotEmpty(this.connection)) {
            log.info("Execute cratedb plugin logic started");
            this.response = this.connection.getResponse();
            Adapter processor = new CrateDBAdapter(this.connection);
            this.response = processor.handlerExecute(content);
            log.info("Execute cratedb plugin logic end");
        }
        return this.response;
    }

    @Override
    public void destroy()
    {
        if (ObjectUtils.isNotEmpty(this.connection)) {
            this.connection.destroy();
        }
    }
}
