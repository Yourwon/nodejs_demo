# nodejs_demo
使用Express的服务端demo。

一、简介
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 
Node.js 的包管理器 npm，是全球最大的开源库生态系统。

npm (nodejs package manager) nodejs包管理器

二、安装Express及相关组件

#查看最新的版本

npm info express version    

#全局安装

npm install  -g express 

npm install -g express-generator


#redis

npm uninstall redis --save

npm install redis@3.1.2 --save


#mysql

npm install -g mysql 

三、部署
#安装
npm install -g pm2
#于根目录下运行
pm2 start ./app.js --name hw --watch

#查看日志
pm2 logs


#问题

#如果是本地环境，用node app的方式运行过，使用pm2运行时，

#可能会出现端口被占用的问题，日志中   code: 'EADDRINUSE', errno: -4091,

#排查端口占用，cmd用find ,powershell用findstr， 查找占用3000端口的PID

findstr  netstat -ano | findstr "3000"

#查看并结束占用

tasklist

taskkill /f /pid 8624

