# 开发流程

## 1 创建项目

React@17

```bash
npx create-react-app twitter-react --template typescript
```

## 2 安装依赖

```bash
yarn add \
  axios@0.21 \
  moment@2 \
  react-redux@7 \
  redux-thunk@2 \
  react-hook-form@7 \
  react-router-dom@5 \
  @types/react-router-dom@5
```

```bash
yarn add \
  @material-ui/core@4 \
  @material-ui/icons@4 \
  notistack@1
```

```bash
yarn add \
  redux-devtools-extension \
  node-sass \
  sass-loader
```

```bash
yarn add \
  http-proxy-middleware
```

## 3 组件设计

### 3.1 登录页面

1. 登录表单
2. 表单验证

### 3.2 注册页面

1. 注册表单
2. 表单验证

### 3.3 首页

1. 顶部状态栏（通用）
2. 时间线（通用）
3. 发送推文组件

### 3.4 推文详情页

1. 顶部状态栏（通用）
2. 推文组件
   1. 用户头像
   2. 发送时间
   3. 图文正文
   4. 点赞及数量
   5. 评论及数量
   6. 转发及数量
3. 评论列表
   1. 评论组件
      1. 评论头像
      2. 发送时间
      3. 评论正文 / 回复
   2. 无限滚动加载
4. 发送评论组件

### 3.5 个人详情页

1. 顶部状态栏（通用）
2. 个人详情卡片
   1. 用户头像
3. 时间线（通用）

### 3.6 通用组件

1. 路由守卫
2. 加载组件
3. 时间线
   1. 推文卡片
      1. 用户头像
      2. 发送时间
      3. 图文正文
      4. 点赞及数量
      5. 评论及数量
      6. 转发及数量
   2. 无限滚动加载
