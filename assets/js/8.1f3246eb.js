(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{627:function(s,a,t){s.exports=t.p+"assets/img/2019-11-15-zsh01.7765646c.png"},628:function(s,a,t){s.exports=t.p+"assets/img/2019-11-15-zsh02.6c5f5c30.png"},629:function(s,a,t){s.exports=t.p+"assets/img/2019-11-15-zsh03.1562e4d3.png"},630:function(s,a,t){s.exports=t.p+"assets/img/2019-11-15-zsh04.257c5ffa.png"},631:function(s,a,t){s.exports=t.p+"assets/img/2019-11-15-zsh05.9bd71b05.png"},676:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"配置zsh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置zsh"}},[s._v("#")]),s._v(" 配置zsh")]),s._v(" "),n("p",[s._v("在终端中,一般默认的是使用"),n("code",[s._v("bash")]),s._v(",但有"),n("code",[s._v("zsh")]),s._v("这个终端,习惯使用了,现在就将服务器的修改为"),n("code",[s._v("zsh")]),s._v(".")]),s._v(" "),n("h2",{attrs:{id:"安装-oh-my-zsh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-oh-my-zsh"}},[s._v("#")]),s._v(" 安装 oh-my-zsh")]),s._v(" "),n("p",[s._v("服务器的"),n("code",[s._v("Linux")]),s._v("发行版是"),n("code",[s._v("centos")]),s._v(","),n("code",[s._v("ssh")]),s._v("连接上服务器后.开始下载安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器上连 git 都没有安装,先安装git")]),s._v("\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载 oh-my-zsh ,下面两种方式选择一种即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过 curl 方式")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过 wget 方式")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("img",{attrs:{src:t(627),alt:"zsh_download"}})]),s._v(" "),n("h2",{attrs:{id:"修改-oh-my-zsh-主题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改-oh-my-zsh-主题"}},[s._v("#")]),s._v(" 修改 oh-my-zsh 主题")]),s._v(" "),n("p",[s._v("先查看下有什么主题,蓝色的就是当前正在使用的主题")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ~/.oh-my-zsh/themes\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(628),alt:"zsh_theme"}})]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找到 ZSH_THEME,改成自己喜欢的主题即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZSH_THEME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"robbyrussell"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"配置自动补全插件-incr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置自动补全插件-incr"}},[s._v("#")]),s._v(" 配置自动补全插件 incr")]),s._v(" "),n("p",[s._v("这个"),n("code",[s._v("incr")]),s._v("是一个自动补全插件,非常强大,再也不用担心敲错内容,只需要"),n("code",[s._v("tab")]),s._v("一下或者等待自动补全")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过wget安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mimosa-pudica.net/src/incr-0.2.zsh\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建好文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/.oh-my-zsh/plugins/inrc -p\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把下载的插件移动到改文件及下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" incr-0.2.zsh ~/.on-my-zsh/plugins/inrc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 .zshrc 文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("在末尾加上")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.oh-my-zsh/plugins/incr/incr*.zsh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("更新配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"解决与-vim-提示可能会冲突的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决与-vim-提示可能会冲突的方法"}},[s._v("#")]),s._v(" 解决与 vim 提示可能会冲突的方法")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" t\n_arguments:451: _vim_files: "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" definition "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" not found\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("解决方法: 将"),n("code",[s._v("~/.zcompdump*")]),s._v("删除即可")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.zcompdump*\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"安装-autojump"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-autojump"}},[s._v("#")]),s._v(" 安装 autojump")]),s._v(" "),n("p",[n("code",[s._v("autojump")]),s._v("插件可以记录访问过的目录,后续只需要通过关键字"),n("code",[s._v("j")]),s._v("加上目录开头即可有6个匹配项,可以直接在任意路径之间跳转")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mac 可以通过 brew 安装")]),s._v("\nbrew "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" autojump\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过源码方式安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/joelthelion/autojump.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" autojump\n./install.py\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("在"),n("code",[s._v(".zshrc")]),s._v("文件后面添加配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用brew安装的")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --prefix"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/etc/profile.d/autojump.sh "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --prefix"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/etc/profile.d/autojump.sh\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH")]),s._v("/oh-my-zsh.sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用git安装的")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s ~/.autojump/etc/profile.d/autojump.sh "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ~/.autojump/etc/profile.d/autojump.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("img",{attrs:{src:t(629),alt:"autojump1"}}),s._v("\n在插件列表加上autojump\n"),n("img",{attrs:{src:t(630),alt:"autojump2"}}),s._v(" "),n("img",{attrs:{src:t(631),alt:"autojump3"}})]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新资源")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("code",[s._v("autojump")]),s._v("是根据跳转过的路径来提示的,如果出现错误路径可以使用"),n("code",[s._v("autojump --purge")]),s._v("清除")]),s._v(" "),n("h2",{attrs:{id:"配置常用-alias"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置常用-alias"}},[s._v("#")]),s._v(" 配置常用 alias")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# alias base")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("free")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'top -l 1 | head -n 10 | grep PhysMem'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ls")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -hG'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ll")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -l'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("la")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -a'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("l")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -CF'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cls")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'clear'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gs")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git status'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gc")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git commit'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gqa")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git add .'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# alias docker")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dkst")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker stats"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dkps")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker ps"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dkpsa")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker ps -a"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dkimgs")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker images"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dkcpup")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-compose up -d"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dkcpdown")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-compose down"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dkcpstart")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-compose start"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dkcpstop")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-compose stop"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);