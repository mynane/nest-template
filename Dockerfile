FROM registry.iting.top:5000/node
MAINTAINER 755836844@qq.com
RUN apt-get update -y
# RUN apt-get upgrade -y


RUN apt-get install -y supervisor
RUN mkdir -p /var/log/supervisor

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY dist /var/server
COPY node_modules /var/server/node_modules

EXPOSE 4000
CMD ["/usr/bin/supervisord"]
