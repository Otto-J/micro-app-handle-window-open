# 验证 window.open 怎么处理

执行步骤：
- 进入 base-app 安装依赖
- 进入 child-app 安装依赖。
- 分别运行两个项目，观察。
- http://localhost:8082/ 是子应用，添加了一个 window.open
- http://localhost:8080/ 是基座，嵌套了子应用
