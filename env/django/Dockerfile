FROM python:3.4
MAINTAINER Richard Olsson <r@richardolsson.se>

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update
RUN apt-get install -q -y --force-yes --fix-missing python3-dev python3-pip
RUN apt-get install -q -y --force-yes libpq-dev
RUN apt-get install -q -y --force-yes git


RUN pip3 install Django==1.11 psycopg2 markdown openpyxl mandrill==1.0.57 \
                pdfkit requests==2.4.3

# Install facebook sdk from git to support Py3
RUN pip3 install git+https://github.com/pythonforfacebook/facebook-sdk.git

RUN pip3 install gunicorn
RUN pip3 install Pillow

RUN apt-get clean && rm -rf /var/lib/opt/lists/* /tmp/* /var/tmp/*

WORKDIR /var/app
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
