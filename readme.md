### 测试serviceworker作用域问题  
[测试页地址](https://nowheretorun.github.io/PWAScopeTest/)

[主域名](https://nowheretorun.github.io/PWAScopeTest/sina/index.html)  
[子域名1](https://nowheretorun.github.io/PWAScopeTest/sina/nextPage/index.html)   

主域名与子域名1使用了同样的资源，子域名1内注册了serviceworker（scope: './'），子域名2内注册了serviceworker（scope: '../'），主域名没有注册serviceworker

#### 结论
子域名1注册的serviceworker时使用scope为`./`（默认值就是`./`），子域名内注册的sw不会对主域名产生影响  

子域名2注册的serviceworker时使用scope为`../`，报以下错误

> The path of the provided scope ('/') is not under the max scope allowed ('/nextPage2/'). Adjust the scope, move the Service Worker script, or use the Service-Worker-Allowed HTTP header to allow the scope.
