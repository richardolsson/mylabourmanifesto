#!/bin/sh

#mkdir /var/run/postgresql/9.4-main.pg_stat_tmp
#chown -R postgres:postgres /var/run/postgresql
#chown -Rf postgres:postgres /var/lib/postgresql/9.4/main
#/etc/init.d/postgresql start
#su postgres -c "psql -c \"CREATE USER $PG_USER WITH PASSWORD '$PG_PASSWORD';\""
#su postgres -c "psql -c \"CREATE DATABASE $PG_DB WITH OWNER $PG_USER;\""
#/etc/init.d/postgresql stop
su postgres -c "/usr/lib/postgresql/9.4/bin/postgres -D /var/lib/postgresql/9.4/main -c config_file=/etc/postgresql/9.4/main/postgresql.conf"
