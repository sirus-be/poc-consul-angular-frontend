FROM nginx:alpine

COPY /dist/sirus-poc-consul-frontend /usr/share/nginx/html
RUN rm /usr/share/nginx/html/assets/appconfig.json

WORKDIR /consul
RUN wget -O consul-template.tgz https://releases.hashicorp.com/consul-template/0.20.0/consul-template_0.20.0_linux_amd64.tgz
RUN tar -xvzf consul-template.tgz
RUN mv consul-template /usr/local/bin/consultemplate
RUN chmod +x /usr/local/bin/consultemplate

COPY appconfig.tpl .
COPY start.sh .

RUN chmod +x start.sh

ENTRYPOINT [ "/consul/start.sh" ]