(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{361:function(s,t,a){s.exports=a.p+"assets/img/generate_rsa.146c091f.png"},362:function(s,t,a){s.exports=a.p+"assets/img/test_ssh1.ccf2f933.png"},363:function(s,t,a){s.exports=a.p+"assets/img/test_ssh2.498ef6c6.png"},397:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"使用ssh操作git仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用ssh操作git仓库"}},[s._v("#")]),s._v(" 使用ssh操作git仓库")]),s._v(" "),e("h2",{attrs:{id:"为什么使用ssh方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用ssh方式"}},[s._v("#")]),s._v(" 为什么使用ssh方式")]),s._v(" "),e("p",[s._v("git仓库一般提供两种方式")]),s._v(" "),e("ol",[e("li",[s._v("ssh")]),s._v(" "),e("li",[s._v("https")])]),s._v(" "),e("p",[s._v("而https形式,没有设置全局store账户密码时,需要多次输入账号密码,使用ssh方式,减少了记忆账号密码,以及输入过程,会更便捷.")]),s._v(" "),e("h2",{attrs:{id:"生成-添加ssh公钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成-添加ssh公钥"}},[s._v("#")]),s._v(" 生成/添加SSH公钥")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("ssh-keygen -t rsa -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxx@xxx.com"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成 一堆 rsa 公钥/私钥")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("按照提示完成三个回车,即可生成"),e("code",[s._v("ssh key")]),s._v(".通过查看"),e("code",[s._v("~/.ssh/id_rsa.pub")]),s._v("文件内容,获取到"),e("code",[s._v("public key")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_ras.pub\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh-ras xxxx")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:a(361),alt:"generate ssh"}})]),s._v(" "),e("h2",{attrs:{id:"添加ssh公钥到git中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加ssh公钥到git中"}},[s._v("#")]),s._v(" 添加ssh公钥到git中")]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("settings")]),s._v("中将获取到的公钥贴站上即可")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("首次使用需要确认并添加主机到本机SSH可信列表,若返回")]),s._v(" "),e("p",[e("code",[s._v("Hi xxx, You've successfully authenticated ...")])]),s._v(" "),e("p",[s._v("内容则证明添加完成")]),s._v(" "),e("p",[e("img",{attrs:{src:a(362),alt:"test ssh"}})]),s._v(" "),e("p",[s._v("添加成功后就可以使用SSH协议对仓库进行操作了")]),s._v(" "),e("h2",{attrs:{id:"git配置多个ssh-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git配置多个ssh-key"}},[s._v("#")]),s._v(" git配置多个SSH-key")]),s._v(" "),e("h3",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),e("p",[s._v("当拥有多个git账号时候,比如")]),s._v(" "),e("ul",[e("li",[s._v("公司内部开发工作,gitlab")]),s._v(" "),e("li",[s._v("自己的一些开发活动,github")])]),s._v(" "),e("h3",{attrs:{id:"解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),e("p",[s._v("生成多个ssh-key")]),s._v(" "),e("ol",[e("li",[s._v("生成一个公司使用的ssh-key")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("ssh-keygen -t rsa -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxx@company.com'")]),s._v(" -f ~/.ssh/gitlab_id_rsa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("生成一个github专用的ssh-key")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("ssh-keygen -t ras -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxx@github.com'")]),s._v(" -f ~/.ssh/github_id_rsa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("在"),e("code",[s._v("~/.ssh")]),s._v("目录下新建一个config配置文件,添加如下内容(其中Host与HostName填写git服务器的域名,Identity指定私钥的路径)")])]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# company\nHost xxx.com\nHostName xxx.com\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/gitlab_id_rsa\n\n# github\nHost github.com\nHostName github.com\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/github_id_rsa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("使用ssh命令分别进行测试")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@xxx.com\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果成功的话,返回如下内容.\n"),e("img",{attrs:{src:a(363),alt:"test ssh"}})]),s._v(" "),e("p",[s._v("到此,使用ssh配置git就完成了,在操作git仓库时,需要将remote地址设置成使用ssh协议.可节省去输入账号密码的步骤.")])])}),[],!1,null,null,null);t.default=n.exports}}]);