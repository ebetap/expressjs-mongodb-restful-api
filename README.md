＃expressjs-mongodb-restful-api

使用mongoDB和Express.js构建Restful API

描述
确保已在计算机中安装mongoDb。

1.在端口3000上运行
2.数据库名称：“ exmo”

＃建立

1.克隆此存储库
2.打开终端并进入`expressjs-mongodb-restful-api`目录
3.`npm install`如果错误，请尝试使用'sudo npm install'
4.`npm start`

API文档

1.获取所有用户数据`/ users`
2.通过id`/ user /：id`获取用户需要id作为参数
3.使用正文{{email：'someemail @ gmail.com'，password：'somepassword'}`发布用户数据`/ users`。
4. PUT用户数据`/ users /：id`要求id为参数，正文为{{email：'someemail @ gmail.com'，password：'somepassword'}`
5.删除用户数据`/ users /：id`需要id作为参数