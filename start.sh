#!/bin/sh

nginx

consultemplate -consul-addr host.docker.internal:8500 -template /consul/appconfig.tpl:/usr/share/nginx/html/assets/appconfig.json:'nginx -s reload'
