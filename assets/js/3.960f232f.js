(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{362:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer01.6b7f5185.png"},363:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer02.deabc53b.png"},364:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer03.ccc6105a.png"},365:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer04.28421bb5.png"},366:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer05.a6c5c011.png"},367:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer06.24220f34.png"},368:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer07.e3f85b4e.png"},369:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer08.0c0c2806.png"},370:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer09.a1ad3eff.png"},371:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer10.7ad651cf.png"},372:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer11.87a68e0c.png"},373:function(a,r,t){a.exports=t.p+"assets/img/2020-04-05-docker-portainer12.056ce8a6.png"},419:function(a,r,t){"use strict";t.r(r);var e=t(2),s=Object(e.a)({},(function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"portainer-docker-可视化管理工具的安装配置及使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#portainer-docker-可视化管理工具的安装配置及使用"}},[a._v("#")]),a._v(" Portainer -- Docker 可视化管理工具的安装配置及使用")]),a._v(" "),e("h2",{attrs:{id:"portainer-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#portainer-介绍"}},[a._v("#")]),a._v(" Portainer 介绍")]),a._v(" "),e("p",[e("code",[a._v("Portainer")]),a._v("是"),e("code",[a._v("Docker")]),a._v("的图形化管理工具,具有以下的功能")]),a._v(" "),e("ul",[e("li",[a._v("提供状态显示面板")]),a._v(" "),e("li",[a._v("应用模板快速部署")]),a._v(" "),e("li",[a._v("容器镜像网络数据卷的基本操作(包括上传下载镜像,创建镜像等操作)")]),a._v(" "),e("li",[a._v("事件日志显示")]),a._v(" "),e("li",[a._v("容器控制台操作")]),a._v(" "),e("li",[e("code",[a._v("Swarm")]),a._v("集群和服务等集中管理和操作")]),a._v(" "),e("li",[a._v("登录用户管理和控制功能\n等等,功能十分的齐全")])]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.portainer.io/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("portainer安装文档"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[a._v("#")]),a._v(" 下载镜像")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查询当前 portainer 有什么镜像")]),a._v("\ndocker search portainer\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:t(362),alt:"portainer-show"}}),a._v("\n下载上图第一个镜像"),e("code",[a._v("portainer/portainer")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 拉取镜像")]),a._v("\ndocker pull portainer/portainer\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("等出现下图这样,就是拉取镜像成功了.\n"),e("img",{attrs:{src:t(363),alt:"pull-image"}})]),a._v(" "),e("p",[a._v("查看镜像")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker images\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(364),alt:"docker-images"}})]),a._v(" "),e("h3",{attrs:{id:"运行单机版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行单机版"}},[a._v("#")]),a._v(" 运行单机版")]),a._v(" "),e("p",[a._v("如果只需要一个"),e("code",[a._v("docker")]),a._v("宿主机,则可使用单机版来运行,"),e("code",[a._v("Portainer")]),a._v("单机版运行十分的简单,执行一条语句即可启动容器,来管理该机器上的"),e("code",[a._v("docker")]),a._v("镜像,容器等数据.")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),a._v(":9000 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -v /var/run/docker.sock:/var/run/docker.sock "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --name prtainer-test "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    docker.io/portainer/portainer\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("使用该语句,管理宿主机"),e("code",[a._v("9000")]),a._v("端口与容器的"),e("code",[a._v("9000")]),a._v("端口,并使用"),e("code",[a._v("--name prtainer-test")]),a._v("把容器起名为"),e("code",[a._v("prtainer-test")]),a._v(",在执行完改语句后,可以使用"),e("code",[a._v("ip:9000")]),a._v("来访问到"),e("code",[a._v("Portainer")]),a._v("实例.\n"),e("img",{attrs:{src:t(365),alt:"view-portainer"}})]),a._v(" "),e("p",[a._v("首次登陆需要注册用户,给"),e("code",[a._v("admin")]),a._v("用户设置密码.\n"),e("img",{attrs:{src:t(366),alt:"register"}})]),a._v(" "),e("p",[a._v("选择"),e("code",[a._v("local")]),a._v("管理本机"),e("code",[a._v("docker")]),a._v("即可.\n"),e("img",{attrs:{src:t(367),alt:"local"}})]),a._v(" "),e("h3",{attrs:{id:"查看容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器"}},[a._v("#")]),a._v(" 查看容器")]),a._v(" "),e("p",[e("img",{attrs:{src:t(368),alt:"container-detail"}})]),a._v(" "),e("p",[a._v("点击容器的"),e("code",[a._v("name")]),a._v("即可看到容器具体的信息")]),a._v(" "),e("p",[a._v("也可以创建镜像\n"),e("img",{attrs:{src:t(369),alt:"create-image"}})]),a._v(" "),e("h3",{attrs:{id:"功能介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[a._v("#")]),a._v(" 功能介绍")]),a._v(" "),e("p",[a._v("镜像列表(在镜像列表可以直接"),e("code",[a._v("pull")]),a._v("一个镜像，可以从远程"),e("code",[a._v("pull")]),a._v("，也可以从私有库中"),e("code",[a._v("pull")]),a._v("。从私有库中"),e("code",[a._v("pull")]),a._v("，需要将私有库的地址提前进行配置)\n"),e("img",{attrs:{src:t(370),alt:"images-list"}})]),a._v(" "),e("p",[a._v("点击"),e("code",[a._v("镜像ID")]),a._v("，即可查看镜像详情信息，在详情信息页面，除了镜像的一些信息外，还可以对该镜像进行打标签"),e("code",[a._v("tag")]),a._v("操作，然后将镜像"),e("code",[a._v("push")]),a._v("到远程仓库或者私有仓库中。\n"),e("img",{attrs:{src:t(371),alt:"tag"}})]),a._v(" "),e("p",[a._v("仓库管理页面(该界面可以查看配置的镜像仓库列表，同时可以添加仓库，添加成功之后，即可在"),e("code",[a._v("image")]),a._v("镜像页面进行"),e("code",[a._v("pull")]),a._v("、"),e("code",[a._v("push")]),a._v("操作)\n"),e("img",{attrs:{src:t(372),alt:"registries"}})]),a._v(" "),e("h4",{attrs:{id:"添加镜像仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加镜像仓库"}},[a._v("#")]),a._v(" 添加镜像仓库")]),a._v(" "),e("p",[e("img",{attrs:{src:t(373),alt:"registries-url"}})])])}),[],!1,null,null,null);r.default=s.exports}}]);