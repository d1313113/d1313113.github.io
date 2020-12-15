---
draft: false
category: Docker
tags:
  - devOps
date: 2020-12-15
title: docker nginx hosts
# 固定标题
vssue-title: docker nginx hosts
---
在`docker`运行的`nginx`中,有需要访问宿主机的情况,`nginx`普通配置如下
```properties{17,22,40,69,78}
server {
  listen       80;
  server_name  www.leyou.com;

  access_log /app/docker-lnmp/nginx/logs/leyou/access.www.leyou.com.log combined;
  error_log /app/docker-lnmp/nginx/logs/leyou/error.www.leyou.com.log;

  proxy_set_header X-Forwarded-Host $host;
  proxy_set_header X-Forwarded-Server $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

	#以item开头的请求都代理到8084端口
	location /item {
    # 先找本地，本地有经过静态化处理的页面，默认在nginx目录下的html目录下
    root html;
    if (!-f $request_filename) { #请求的文件不存在，就反向代理
      proxy_pass http://127.0.0.1:8084;
      break;
    }
  }
  location / {
    proxy_pass http://127.0.0.1:9002;
    proxy_connect_timeout 600;
    proxy_read_timeout 600;
  }
}

server {
  listen       80;  #监听的端口
  server_name  	manage.leyou.com;	#监听的域名

  access_log /app/docker-lnmp/nginx/logs/leyou/access.manage.leyou.com.log combined;
  error_log /app/docker-lnmp/nginx/logs/leyou/error.manage.leyou.com.log;

  proxy_set_header X-Forwarded-Host $host;
  proxy_set_header X-Forwarded-Server $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

  location / {
    proxy_pass http://127.0.0.1:9001;
    proxy_connect_timeout 600;
    proxy_read_timeout 600;
    #root   html;
    #index  index.html index.htm;
  }

  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
    root   html;
  }
}

#网关代理，每一个以api.leyou.com域名的请求都会被代理到http://127.0.0.1:10010中去
server {
  listen       80;
  server_name  api.leyou.com;

  access_log /app/docker-lnmp/nginx/logs/leyou/access.api.leyou.com.log combined;
  error_log /app/docker-lnmp/nginx/logs/leyou/error.api.leyou.com.log;

  proxy_set_header X-Forwarded-Host $host;
  proxy_set_header X-Forwarded-Server $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  # 转发时携带请求的自身的host,而不是转发后的host: 127.0.0.1  ,主要是为了将cookie中的内容返回到请求浏览器
  proxy_set_header Host $host;

  # 上传路径的映射，将上传图片的请求不经过网关，将图片保存在其他服务器。以免造成不必要的网络开销
  location /api/upload {
    proxy_pass http://127.0.0.1:8082;
    proxy_connect_timeout 600;
    proxy_read_timeout 600;

    # nginx对代理的路径进行重写
    rewrite "^/api/(.*)$" /$1 break;
  }

  location / {
    proxy_pass http://127.0.0.1:10010;
    proxy_connect_timeout 600;
    proxy_read_timeout 600;
  }
}
```
但以上配置中的`http://127.0.0.1`并不能访问宿主机,经查阅资料,提示使用`host.docker.internal`来访问宿主机.尝试过后并不行,发现是因为没有带协议,在`nginx`中应该配置成`http://host.docker.internal`,此时重启容器后访问宿主机成功

最终配置如下
```properties{17,22,40,69,78}
server {
  listen       80;
  server_name  www.leyou.com;

  access_log /app/docker-lnmp/nginx/logs/leyou/access.www.leyou.com.log combined;
  error_log /app/docker-lnmp/nginx/logs/leyou/error.www.leyou.com.log;

  proxy_set_header X-Forwarded-Host $host;
  proxy_set_header X-Forwarded-Server $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

	#以item开头的请求都代理到8084端口
	location /item {
    # 先找本地，本地有经过静态化处理的页面，默认在nginx目录下的html目录下
    root html;
    if (!-f $request_filename) { #请求的文件不存在，就反向代理
      proxy_pass http://host.docker.internal:8084;
      break;
    }
  }
  location / {
    proxy_pass http://host.docker.internal:9002;
    proxy_connect_timeout 600;
    proxy_read_timeout 600;
  }
}

server {
  listen       80;  #监听的端口
  server_name  	manage.leyou.com;	#监听的域名

  access_log /app/docker-lnmp/nginx/logs/leyou/access.manage.leyou.com.log combined;
  error_log /app/docker-lnmp/nginx/logs/leyou/error.manage.leyou.com.log;

  proxy_set_header X-Forwarded-Host $host;
  proxy_set_header X-Forwarded-Server $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

  location / {
    proxy_pass http://host.docker.internal:9001;
    proxy_connect_timeout 600;
    proxy_read_timeout 600;
    #root   html;
    #index  index.html index.htm;
  }

  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
    root   html;
  }
}

#网关代理，每一个以api.leyou.com域名的请求都会被代理到http://127.0.0.1:10010中去
server {
  listen       80;
  server_name  api.leyou.com;

  access_log /app/docker-lnmp/nginx/logs/leyou/access.api.leyou.com.log combined;
  error_log /app/docker-lnmp/nginx/logs/leyou/error.api.leyou.com.log;

  proxy_set_header X-Forwarded-Host $host;
  proxy_set_header X-Forwarded-Server $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  # 转发时携带请求的自身的host,而不是转发后的host: 127.0.0.1  ,主要是为了将cookie中的内容返回到请求浏览器
  proxy_set_header Host $host;

  # 上传路径的映射，将上传图片的请求不经过网关，将图片保存在其他服务器。以免造成不必要的网络开销
  location /api/upload {
    proxy_pass http://host.docker.internal:8082;
    proxy_connect_timeout 600;
    proxy_read_timeout 600;

    # nginx对代理的路径进行重写
    rewrite "^/api/(.*)$" /$1 break;
  }

  location / {
    proxy_pass http://host.docker.internal:10010;
    proxy_connect_timeout 600;
    proxy_read_timeout 600;
  }
}
```