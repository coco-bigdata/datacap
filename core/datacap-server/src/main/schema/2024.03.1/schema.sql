#
If you are upgrading to 2024.03.1 from a different version, execute the following SQL statement
# Если вы обновляетесь до версии 2024.03.1 с другой версии, выполните следующую инструкцию SQL
# 如果您是通过其他版本升级到 2024.03.1, 请执行以下 SQL 语句

USE `datacap`;

UPDATE `menus` t
SET t.url = '/dashboard/home'
WHERE t.id = 1;
