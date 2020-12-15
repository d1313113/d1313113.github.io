(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{671:function(a,s,t){"use strict";t.r(s);var r=t(3),n=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("在"),t("code",[a._v("docker")]),a._v("运行的"),t("code",[a._v("nginx")]),a._v("中,有需要访问宿主机的情况,"),t("code",[a._v("nginx")]),a._v("普通配置如下")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("server")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  listen")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("      80;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  server_name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v(" www.leyou.com;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  access_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/access.www.leyou.com.log combined;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  error_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/error.www.leyou.com.log;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Host $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Server $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-For $proxy_add_x_forwarded_for;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\t#以item开头的请求都代理到8084端口")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("\tlocation")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/item {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("    # 先找本地，本地有经过静态化处理的页面，默认在nginx目录下的html目录下")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    root")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("html;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("(!-f $request_filename) { #请求的文件不存在，就反向代理")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("      proxy_pass")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://127.0.0.1:8084;")]),a._v("\n      break;\n    }\n  }\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  location")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/ {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_pass")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://127.0.0.1:9002;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_connect_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_read_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n  }\n}\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("server")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  listen")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("      80;  #监听的端口")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  server_name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v(" \tmanage.leyou.com;\t#监听的域名")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  access_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/access.manage.leyou.com.log combined;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  error_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/error.manage.leyou.com.log;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Host $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Server $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-For $proxy_add_x_forwarded_for;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  location")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/ {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_pass")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://127.0.0.1:9001;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_connect_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_read_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("    #root   html;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("    #index  index.html index.htm;")]),a._v("\n  }\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  error_page")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("  500 502 503 504  /50x.html;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  location")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/50x.html {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    root")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("  html;")]),a._v("\n  }\n}\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#网关代理，每一个以api.leyou.com域名的请求都会被代理到http://127.0.0.1:10010中去")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("server")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  listen")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("      80;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  server_name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v(" api.leyou.com;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  access_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/access.api.leyou.com.log combined;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  error_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/error.api.leyou.com.log;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Host $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Server $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-For $proxy_add_x_forwarded_for;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("  # 转发时携带请求的自身的host,而不是转发后的host: 127.0.0.1  ,主要是为了将cookie中的内容返回到请求浏览器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("Host $host;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("  # 上传路径的映射，将上传图片的请求不经过网关，将图片保存在其他服务器。以免造成不必要的网络开销")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  location")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/api/upload {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_pass")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://127.0.0.1:8082;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_connect_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_read_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("    # nginx对代理的路径进行重写")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    rewrite")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"^/api/(.*)$" /$1 break;')]),a._v("\n  }\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  location")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/ {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_pass")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://127.0.0.1:10010;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_connect_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_read_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n  }\n}\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br"),t("span",{staticClass:"line-number"},[a._v("40")]),t("br"),t("span",{staticClass:"line-number"},[a._v("41")]),t("br"),t("span",{staticClass:"line-number"},[a._v("42")]),t("br"),t("span",{staticClass:"line-number"},[a._v("43")]),t("br"),t("span",{staticClass:"line-number"},[a._v("44")]),t("br"),t("span",{staticClass:"line-number"},[a._v("45")]),t("br"),t("span",{staticClass:"line-number"},[a._v("46")]),t("br"),t("span",{staticClass:"line-number"},[a._v("47")]),t("br"),t("span",{staticClass:"line-number"},[a._v("48")]),t("br"),t("span",{staticClass:"line-number"},[a._v("49")]),t("br"),t("span",{staticClass:"line-number"},[a._v("50")]),t("br"),t("span",{staticClass:"line-number"},[a._v("51")]),t("br"),t("span",{staticClass:"line-number"},[a._v("52")]),t("br"),t("span",{staticClass:"line-number"},[a._v("53")]),t("br"),t("span",{staticClass:"line-number"},[a._v("54")]),t("br"),t("span",{staticClass:"line-number"},[a._v("55")]),t("br"),t("span",{staticClass:"line-number"},[a._v("56")]),t("br"),t("span",{staticClass:"line-number"},[a._v("57")]),t("br"),t("span",{staticClass:"line-number"},[a._v("58")]),t("br"),t("span",{staticClass:"line-number"},[a._v("59")]),t("br"),t("span",{staticClass:"line-number"},[a._v("60")]),t("br"),t("span",{staticClass:"line-number"},[a._v("61")]),t("br"),t("span",{staticClass:"line-number"},[a._v("62")]),t("br"),t("span",{staticClass:"line-number"},[a._v("63")]),t("br"),t("span",{staticClass:"line-number"},[a._v("64")]),t("br"),t("span",{staticClass:"line-number"},[a._v("65")]),t("br"),t("span",{staticClass:"line-number"},[a._v("66")]),t("br"),t("span",{staticClass:"line-number"},[a._v("67")]),t("br"),t("span",{staticClass:"line-number"},[a._v("68")]),t("br"),t("span",{staticClass:"line-number"},[a._v("69")]),t("br"),t("span",{staticClass:"line-number"},[a._v("70")]),t("br"),t("span",{staticClass:"line-number"},[a._v("71")]),t("br"),t("span",{staticClass:"line-number"},[a._v("72")]),t("br"),t("span",{staticClass:"line-number"},[a._v("73")]),t("br"),t("span",{staticClass:"line-number"},[a._v("74")]),t("br"),t("span",{staticClass:"line-number"},[a._v("75")]),t("br"),t("span",{staticClass:"line-number"},[a._v("76")]),t("br"),t("span",{staticClass:"line-number"},[a._v("77")]),t("br"),t("span",{staticClass:"line-number"},[a._v("78")]),t("br"),t("span",{staticClass:"line-number"},[a._v("79")]),t("br"),t("span",{staticClass:"line-number"},[a._v("80")]),t("br"),t("span",{staticClass:"line-number"},[a._v("81")]),t("br"),t("span",{staticClass:"line-number"},[a._v("82")]),t("br")])]),t("p",[a._v("但以上配置中的"),t("code",[a._v("http://127.0.0.1")]),a._v("并不能访问宿主机,经查阅资料,提示使用"),t("code",[a._v("host.docker.internal")]),a._v("来访问宿主机.尝试过后并不行,发现是因为没有带协议,在"),t("code",[a._v("nginx")]),a._v("中应该配置成"),t("code",[a._v("http://host.docker.internal")]),a._v(",此时重启容器后访问宿主机成功")]),a._v(" "),t("p",[a._v("最终配置如下")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("server")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  listen")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("      80;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  server_name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v(" www.leyou.com;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  access_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/access.www.leyou.com.log combined;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  error_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/error.www.leyou.com.log;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Host $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Server $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-For $proxy_add_x_forwarded_for;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\t#以item开头的请求都代理到8084端口")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("\tlocation")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/item {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("    # 先找本地，本地有经过静态化处理的页面，默认在nginx目录下的html目录下")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    root")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("html;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("(!-f $request_filename) { #请求的文件不存在，就反向代理")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("      proxy_pass")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://host.docker.internal:8084;")]),a._v("\n      break;\n    }\n  }\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  location")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/ {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_pass")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://host.docker.internal:9002;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_connect_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_read_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n  }\n}\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("server")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  listen")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("      80;  #监听的端口")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  server_name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v(" \tmanage.leyou.com;\t#监听的域名")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  access_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/access.manage.leyou.com.log combined;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  error_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/error.manage.leyou.com.log;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Host $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Server $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-For $proxy_add_x_forwarded_for;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  location")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/ {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_pass")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://host.docker.internal:9001;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_connect_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_read_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("    #root   html;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("    #index  index.html index.htm;")]),a._v("\n  }\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  error_page")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("  500 502 503 504  /50x.html;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  location")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/50x.html {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    root")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("  html;")]),a._v("\n  }\n}\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#网关代理，每一个以api.leyou.com域名的请求都会被代理到http://127.0.0.1:10010中去")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("server")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  listen")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("      80;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  server_name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v(" api.leyou.com;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  access_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/access.api.leyou.com.log combined;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  error_log")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/app/docker-lnmp/nginx/logs/leyou/error.api.leyou.com.log;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Host $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-Server $host;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("X-Forwarded-For $proxy_add_x_forwarded_for;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("  # 转发时携带请求的自身的host,而不是转发后的host: 127.0.0.1  ,主要是为了将cookie中的内容返回到请求浏览器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  proxy_set_header")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("Host $host;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("  # 上传路径的映射，将上传图片的请求不经过网关，将图片保存在其他服务器。以免造成不必要的网络开销")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  location")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/api/upload {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_pass")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://host.docker.internal:8082;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_connect_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_read_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("    # nginx对代理的路径进行重写")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    rewrite")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v('"^/api/(.*)$" /$1 break;')]),a._v("\n  }\n\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  location")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/ {")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_pass")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("http://host.docker.internal:10010;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_connect_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    proxy_read_timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("600;")]),a._v("\n  }\n}\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br"),t("span",{staticClass:"line-number"},[a._v("40")]),t("br"),t("span",{staticClass:"line-number"},[a._v("41")]),t("br"),t("span",{staticClass:"line-number"},[a._v("42")]),t("br"),t("span",{staticClass:"line-number"},[a._v("43")]),t("br"),t("span",{staticClass:"line-number"},[a._v("44")]),t("br"),t("span",{staticClass:"line-number"},[a._v("45")]),t("br"),t("span",{staticClass:"line-number"},[a._v("46")]),t("br"),t("span",{staticClass:"line-number"},[a._v("47")]),t("br"),t("span",{staticClass:"line-number"},[a._v("48")]),t("br"),t("span",{staticClass:"line-number"},[a._v("49")]),t("br"),t("span",{staticClass:"line-number"},[a._v("50")]),t("br"),t("span",{staticClass:"line-number"},[a._v("51")]),t("br"),t("span",{staticClass:"line-number"},[a._v("52")]),t("br"),t("span",{staticClass:"line-number"},[a._v("53")]),t("br"),t("span",{staticClass:"line-number"},[a._v("54")]),t("br"),t("span",{staticClass:"line-number"},[a._v("55")]),t("br"),t("span",{staticClass:"line-number"},[a._v("56")]),t("br"),t("span",{staticClass:"line-number"},[a._v("57")]),t("br"),t("span",{staticClass:"line-number"},[a._v("58")]),t("br"),t("span",{staticClass:"line-number"},[a._v("59")]),t("br"),t("span",{staticClass:"line-number"},[a._v("60")]),t("br"),t("span",{staticClass:"line-number"},[a._v("61")]),t("br"),t("span",{staticClass:"line-number"},[a._v("62")]),t("br"),t("span",{staticClass:"line-number"},[a._v("63")]),t("br"),t("span",{staticClass:"line-number"},[a._v("64")]),t("br"),t("span",{staticClass:"line-number"},[a._v("65")]),t("br"),t("span",{staticClass:"line-number"},[a._v("66")]),t("br"),t("span",{staticClass:"line-number"},[a._v("67")]),t("br"),t("span",{staticClass:"line-number"},[a._v("68")]),t("br"),t("span",{staticClass:"line-number"},[a._v("69")]),t("br"),t("span",{staticClass:"line-number"},[a._v("70")]),t("br"),t("span",{staticClass:"line-number"},[a._v("71")]),t("br"),t("span",{staticClass:"line-number"},[a._v("72")]),t("br"),t("span",{staticClass:"line-number"},[a._v("73")]),t("br"),t("span",{staticClass:"line-number"},[a._v("74")]),t("br"),t("span",{staticClass:"line-number"},[a._v("75")]),t("br"),t("span",{staticClass:"line-number"},[a._v("76")]),t("br"),t("span",{staticClass:"line-number"},[a._v("77")]),t("br"),t("span",{staticClass:"line-number"},[a._v("78")]),t("br"),t("span",{staticClass:"line-number"},[a._v("79")]),t("br"),t("span",{staticClass:"line-number"},[a._v("80")]),t("br"),t("span",{staticClass:"line-number"},[a._v("81")]),t("br"),t("span",{staticClass:"line-number"},[a._v("82")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);