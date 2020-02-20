(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{360:function(s,a,n){s.exports=n.p+"assets/img/nodejs_error.588cc359.png"},395:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"记录一次更新nodejs遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记录一次更新nodejs遇到的问题"}},[s._v("#")]),s._v(" 记录一次更新nodejs遇到的问题")]),s._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),e("p",[s._v("之前电脑中的nodejs是通过在nodejs官网下载安装包安装的,在后续想更新时使用brew更新,导致双版本存在.")]),s._v(" "),e("p",[s._v("希望将原有版本去除,同时处理好环境变量.")]),s._v(" "),e("h2",{attrs:{id:"安装nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nodejs"}},[s._v("#")]),s._v(" 安装nodejs")]),s._v(" "),e("p",[s._v("因已经存在了nodejs,又使用了brew更新")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("brew upgrade node\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装完毕,查看版本时")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("node -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("10.x.x 发现依旧是旧版的,不是新版12.x.x")]),s._v(" "),e("h3",{attrs:{id:"处理问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#处理问题"}},[s._v("#")]),s._v(" 处理问题")]),s._v(" "),e("ol",[e("li",[s._v("首先先删除当前node")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("brew uninstall node\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("查看node和npm是否还存在,发现依旧存在")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("where node\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node not found")]),s._v("\nwhere "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连续输出两条")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/bin/npm")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/local/bin/npm")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("强制删除npm后,重装node")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("where "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/bin/npm\nbrew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" node\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("此时安装node报错,提示"),e("code",[s._v("brew link")]),s._v("失败\n"),e("img",{attrs:{src:n(360),alt:"error"}}),s._v("\n4. 验证node")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("node -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("command not found: node")]),s._v(",此时发现node并没有写入环境变量中,但已安装成功")]),s._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[s._v("处理残留ls软连接")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" --overwrite --dry-run node\nbrew unintsll node\nbrew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" node\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[s._v("验证")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("node -v\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v12.12.0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.11.3")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("能正确的输出版本号,此次问题解决.")])])}),[],!1,null,null,null);a.default=t.exports}}]);