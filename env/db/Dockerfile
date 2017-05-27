FROM ubuntu:trusty
MAINTAINER Richard Olsson <r@richardolsson.se>

ENV DEBIAN_FRONTEND noninteractive
RUN echo "deb http://apt.postgresql.org/pub/repos/apt trusty-pgdg main" \
            >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y --force-yes --no-install-recommends \
        postgresql-9.4 postgresql-9.4-postgis-2.1 postgis \
    && rm -rf /var/lib/opt/lists/*

ADD pg_hba.conf /etc/postgresql/9.4/main/pg_hba.conf
ADD postgresql.conf /etc/postgresql/9.4/main/postgresql.conf

RUN chown -R postgres:postgres /var/lib/postgresql/9.4
RUN chown -R postgres:postgres /var/run/postgresql
RUN chown -R postgres:postgres /etc/postgresql/9.4/main
RUN chmod -R 700               /etc/postgresql/9.4/main

ADD start.sh /usr/bin/start.sh
RUN chmod +x /usr/bin/start.sh

ENV PG_USER vdagarna
ENV PG_DB vdagarna_main
ENV PG_PASSWORD mypassword

USER postgres
RUN /etc/init.d/postgresql start \
    && psql -c "CREATE USER $PG_USER WITH PASSWORD '$PG_PASSWORD';" \
    && psql -c "CREATE DATABASE $PG_DB WITH OWNER $PG_USER;" \
    && /etc/init.d/postgresql stop
USER root

VOLUME /var/lib/postgresql
VOLUME /var/log/postgresql
#VOLUME /var/run/postgresql

CMD /usr/bin/start.sh
