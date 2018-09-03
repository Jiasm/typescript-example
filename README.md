# typescript-example
:pager: example for typescript, with decorators (routing-controllers and sequelize)

## dependence

- [routing-controllers](https://github.com/typestack/routing-controllers)
- [sequelize](https://github.com/sequelize/sequelize)
- [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript)
- [react](https://github.com/facebook/react)
- [material-ui](https://github.com/mui-org/material-ui)
- [webpack](https://github.com/webpack/webpack)
- [eslint](https://github.com/webpack/webpack)

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

## run test

本示例存在一些简单的测试用例，可以在服务启动的情况下使用：
```bash
npm test
```

## 配套的一篇水文

- [blog](https://blog.jiasm.org/2018/07/21/TypeScript%E5%9C%A8node%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84%E5%AE%9E%E8%B7%B5/)
- [掘金](https://juejin.im/post/5b5413755188251aab713d14)
- [思否](https://segmentfault.com/a/1190000015719697)

### 关于React的水文地址

- [blog](https://blog.jiasm.org/2018/08/26/TypeScript%E5%9C%A8react%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84%E5%AE%9E%E8%B7%B5/)
- [掘金](https://juejin.im/post/5b83a02ff265da43737e9a27)
- [思否](https://segmentfault.com/a/1190000016163937)

### 最后一公里 - webpack 与 mocha/chai

- [blog](https://blog.jiasm.org/2018/09/03/%E4%BD%BF%E7%94%A8-TypeScript-%E6%94%B9%E9%80%A0%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7%E5%8F%8A%E6%B5%8B%E8%AF%95%E7%94%A8%E4%BE%8B/)
- [掘金](https://juejin.im/post/5b8ca576e51d4538e6334bcd)
- [思否](https://segmentfault.com/a/1190000016247815)