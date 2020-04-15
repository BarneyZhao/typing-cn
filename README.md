## React项目模板

``` 基础架构由create-react-app生成 ```

### 技术架构

- react-router
- typescript
- sass

#### 按路由使用懒加载分包打包策略，路由配置方式见 ```/src/router/routes.ts```，具体实现逻辑见 ```/src/router/index.tsx```

### 项目开发

``` shell
yarn install
yarn dev
```

### 项目构建

- 预发构建模式
``` shell
yarn beta
```
```注：相比生产环境构建只少了cdn地址```

- 生产构建模式
``` shell
yarn online
```

### 发布说明

- 切换到需要发布的代码分支
- ```yarn beta``` or ```yarn online ```（将生成dist文件夹）
- 切换到 beta（预发）或 master（生产）分支，将```v3```文件夹删掉，将```dist```文件夹重命名为```v3```
- 分支提交变更、push
- j-one发布
