# Claude部署教程（Windows）

## 一、node.js安装

复制以下链接进入nodejs下载网站

``https://nodejs.org/zh-cn/download``

点击安装程序

![nodejs安装程序.msi下载](images\nodejs下载.png)

下载后打开安装程序，一直点Next即可

## 二、git安装

复制以下链接进入git下载网站

``https://git-scm.com/install/windows``

点击Click here to download

![git下载](images\git下载.png)

如遇下载问题，可通过访问以下羽翼城大佬的作品解决

``https://www.dogfight360.com/blog/18682/``

下载后打开安装程序，一直点Next即可


## 三、安装Claude code

win+R打开命令提示符

``npm install -g @anthropic-ai/claude-code``

安装好后可以通过一下命令查看版本号看是否成功

``claude --version``

输入`claude`进入Claude即可进入Claude

## 四、跳过登录验证

到当前用户目录，找到`claude.json`文件，右键在记事本中编辑，在最后一行的最后添加`,`然后回车添加以下代码

`"hasCompletedOnboarding": true`

ctrl+S保存

回到命令提示符，再次输入claude即可跳过登录验证进入

## 五、CCSwitch安装

复制以下链接进入

`https://github.com/farion1231/cc-switch/releases/tag/v3.16.1`

拉到最底部，选择Windows.msi文件下载

![CCSwitch下载](images\ccswitch下载.png)

下载后打开安装程序，一直点Next即可

## 六、API配置（DeepSeek，其他模型同理）

复制以下链接进入DeepSeek开放平台，注册或登录

``https://platform.deepseek.com``

之后点击API Key，点击创建API Key，输入API Key的名称，例如：claude，点击复制按钮复制API Key

_注意：不要将API Key透露给任何人，可能会造成财产损失_

之后打开ccswitch，选择Claude，点击添加供应商或者右上角加号，选择DeepSeek，往下拉将API Key填进去，点击添加（如果需要1M可以在模型映射窗口将后面的1M选中，建议打开）即可搞定

## 七、使用Claude

按win+R打开命令提示符，输入`claude`然后回车，进入claude界面，输入`/model`回车可以选择已经接入的模型，当然要想开始使用，还得在DeepSeek开放平台进行充值（DeepSeek V4 Pro预计会在2026年7月中旬涨价）