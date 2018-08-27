# typescript-example
example for typescript, with decorators (routing-controllers and sequelize)

## dependence

- [routing-controllers](https://github.com/typestack/routing-controllers)
- [sequelize](https://github.com/sequelize/sequelize)
- [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript)

## usage

```bash
> npm i
> brew services start mysql
> mysql -u root -p
# 请自行修改config/backend/local.js 中的user、password 以及以下的database
mysql> create database ts_test;
mysql> use ts_test;
mysql> CREATE TABLE `user_info_test` (   `uid` int(11) unsigned NOT NULL AUTO_INCREMENT,   `name` varchar(11) NOT NULL,   `age` int(3) DEFAULT '0',   `gender` int(1) NOT NULL,   PRIMARY KEY (`uid`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

> npm run watch-ts
> npm run watch-node

> curl http://127.0.0.1:8888/add/Niko/18/1
> curl http://127.0.0.1:8888/add/Bellic/26/2

> curl http://127.0.0.1:8888/list/          # [{name: Niko, ...}, {name: Bellic, ...}]
> curl http://127.0.0.1:8888/list/filter/1  # [{name: Niko, ...}]
```

## front-end

如果还想看TS在React中的使用，可以这样搞：
```bash
> cd client-src
> npm i
> npm run dll
> npm run start
# 在确保上边的node服务是启动的情况下
>  open http://127.0.0.1:8888
```

## 配套的一篇水文

- [blog](https://blog.jiasm.org/2018/07/21/TypeScript%E5%9C%A8node%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84%E5%AE%9E%E8%B7%B5/)
- [掘金](https://juejin.im/post/5b534faee51d45195866f2ce)
- [思否](https://segmentfault.com/a/1190000015719697)