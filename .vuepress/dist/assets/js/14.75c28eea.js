(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{273:function(t,a,e){"use strict";e.r(a);var s=e(38),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"理解应用-oauth-2-0-1-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解应用-oauth-2-0-1-简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 理解应用 OAuth 2.0 (1) - 简介")]),t._v(" "),e("blockquote",[e("p",[t._v("第三方登录是我们开发中常见的功能，说到第三方登录就不得不提 OAuth 这个授权相关的网络标准，下面我将通过几篇文章来为你详细介绍 OAuth 并在一个 PHP 的 Laravel 项目中实际运用它。")]),t._v(" "),e("p",[t._v("本章作为第一章，将通过几个简单形象的小例子，将 OAuth 授权机制更加形象地表述出来，通过生活中的例子加深印象，以后碰到 OAuth 中的一些概念时，想一想本章的小例子，相信可以帮助到你。")])]),t._v(" "),e("p",[t._v("OAuth 是一个关于授权（authorization）的开放网络标准，在全世界得到广泛应用，目前的版本是 2.0 版本。OAuth 2.0 是目前最流行的授权机制，用来授权第三方应用，获取用户数据。")]),t._v(" "),e("p",[t._v("这个标准比较抽象，用了许多的术语，初学者并不容易去理解，其实说起来并不怎么复杂。")]),t._v(" "),e("h2",{attrs:{id:"一、应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、应用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、应用场景")]),t._v(" "),e("p",[t._v("为了理解 OAuth 的适用场合，让我举一下假设的例子。")]),t._v(" "),e("p",[t._v('有一个 "云冲印" 的网站，可以将用户存储在 Google 的照片，冲洗出来。用户为了使用该服务，必须让 "云冲印" 读取自己存储在 Google 上的照片信息。')]),t._v(" "),e("p",[t._v('问题是只有得到用户的授权，Google 才会同意 "云冲印" 读取这些照片信息，那么 "云冲印" 怎么获取 Google 的授权呢？')]),t._v(" "),e("p",[t._v('传统方法是，用户将自己的 Google 用户名和密码，告诉 "云冲印"，后者就可以读取用户的照片了。这样的做法有以下几个严重的缺点：')]),t._v(" "),e("ol",[e("li",[t._v('"云冲印" 为了后续的服务，会保存用户的密码，这样子很不安全。')]),t._v(" "),e("li",[t._v("Google 不得不部署密码登录，而我们知道，单纯的密码登录并不安全。")]),t._v(" "),e("li",[t._v('"云冲印" 拥有了获取用户存储在 Google 所有资料的权力，用户没法限制 "云冲印" 获得授权的范围和有效期。')]),t._v(" "),e("li",[t._v('用户只有修改密码，才能收回赋予 "云冲印" 的权力。但是这样做，会使得其他所有获得用户授权的第三方应用全部受影响。')]),t._v(" "),e("li",[t._v("只要有一个第三方程序被破解，就会导致用户密码泄露，以及所有被密码保护的数据被泄露。")])]),t._v(" "),e("p",[t._v("OAuth 就是为了解决以上的问题而生的。")]),t._v(" "),e("h3",{attrs:{id:"_1-1-快递员问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-快递员问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 快递员问题")]),t._v(" "),e("p",[t._v("更加通俗易懂的问题：")]),t._v(" "),e("ul",[e("li",[t._v("我住在一个大型的居民小区 ( 我的微信资料存储在庞大的数据库中 )。")]),t._v(" "),e("li",[t._v("小区有门禁系统 ( 我的微信资料是保密的 )。")]),t._v(" "),e("li",[t._v("进入的时候需要输入密码 ( 获得我的微信好友需要我的密码 )。")]),t._v(" "),e("li",[t._v("我经常网购 / 点外卖，我需要快递员通过门禁，进入小区 ( 我经常用微信登录第三方软件 )。")]),t._v(" "),e("li",[t._v("如果我把密码告诉快递员，他就和我有了一样的权限，不合适，我不想他给我送快递了，我就需要改密码，并且把更新的密码告诉送外卖的 ( 第三方软件只能获得我的头像和好友信息，它不可以看我的朋友圈，万一密码泄露，我所有绑定微信的第三方软件都需要修改 )。")])]),t._v(" "),e("p",[t._v("我们需要一种方式，让快递员自由出入小区，又不需要知道小区居民密码，而且它只能通过这个密码获得送货权限。")]),t._v(" "),e("h3",{attrs:{id:"_1-2-授权机制的设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-授权机制的设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 授权机制的设计")]),t._v(" "),e("p",[t._v("根据上面的问题，我设计了一套系统：")]),t._v(" "),e("ol",[e("li",[t._v("门禁系统密码下面，有一个获取授权的按钮，快递员需要按这个按钮，申请授权。")]),t._v(" "),e("li",[t._v("他按下按钮，我手机会跳出对话框：有人正申请授权，此人是 XXX，工号，属于某快递公司。")]),t._v(" "),e("li",[t._v("我确认信息属实，点击按钮，告诉门禁系统，同意给与授权。")]),t._v(" "),e("li",[t._v("门禁得到我的确认，向快递员展示一个有期限的令牌，允许他通过令牌进入小区。")]),t._v(" "),e("li",[t._v("输入令牌，进入小区。")])]),t._v(" "),e("p",[e("strong",[t._v("单独生成令牌的原因：")])]),t._v(" "),e("ul",[e("li",[t._v("今天生成了明天他可以继续用")]),t._v(" "),e("li",[t._v("用一个令牌通过多重门禁")])]),t._v(" "),e("h3",{attrs:{id:"_1-3-互联网场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-互联网场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 互联网场景")]),t._v(" "),e("p",[t._v('首先，居民小区就是储存用户数据的网络服务。比如，微信储存了我的好友信息，获取这些信息，就必须经过微信的"门禁系统"。')]),t._v(" "),e("p",[t._v("其次，快递员（或者说快递公司）就是第三方应用，想要穿过门禁系统，进入小区。")]),t._v(" "),e("p",[t._v("最后，我就是用户本人，同意授权第三方应用进入小区，获取我的数据。")]),t._v(" "),e("p",[e("strong",[t._v("简单说，OAuth 就是一种授权机制。数据的所有者告诉系统，同意授权第三方应用进入系统，获取这些数据。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用。")])]),t._v(" "),e("h3",{attrs:{id:"_1-4-令牌与密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-令牌与密码","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4 令牌与密码")]),t._v(" "),e("p",[t._v("令牌（ token ）与密码（ password ）的作用是一样的，都可以进入系统，但是有三点差异。")]),t._v(" "),e("ol",[e("li",[t._v("令牌是短期的，到期会自动失效，用户自己无法修改。密码一般长期有效，用户不修改，就不会发生变化。")]),t._v(" "),e("li",[t._v("令牌可以被数据所有者撤销，会立即失效。以上例而言，屋主可以随时取消快递员的令牌。密码一般不允许被他人撤销。")]),t._v(" "),e("li",[t._v("令牌有权限范围（ scope ），比如只能进小区的二号门。对于网络服务来说，只读令牌就比读写令牌更安全。密码一般是完整权限。")])]),t._v(" "),e("p",[t._v("上面这些设计，保证了令牌既可以让第三方应用获得权限，同时又随时可控，不会危及系统安全。这就是 OAuth 2.0 的优点。")]),t._v(" "),e("p",[t._v("注意，只要知道了令牌，就能进入系统。系统一般不会再次确认身份，所以**令牌必须保密，泄漏令牌与泄漏密码的后果是一样的。**这也是为什么令牌的有效期，一般都设置得很短的原因。")]),t._v(" "),e("h2",{attrs:{id:"二、名词定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、名词定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、名词定义")]),t._v(" "),e("p",[t._v("在详细解读 OAuth 2.0 之前，我们需要了解一些专有名词：")]),t._v(" "),e("ol",[e("li",[t._v('Thrid-part application：第三方应用程序，本文中又称 "客户端" ( Client )，即上例中的 "云冲印"。')]),t._v(" "),e("li",[t._v('HTTP Service：HTTP 服务提供商，本文中简称为 "服务提供商"，即上例中的 Google。')]),t._v(" "),e("li",[t._v('Resource Owner：资源所有者，本文中又称 "用户"。')]),t._v(" "),e("li",[t._v("User Agent：用户代理，本文中就是指浏览器。")]),t._v(" "),e("li",[t._v("Authorization server：认证服务器，即服务提供商专门用来处理认证的服务器。")]),t._v(" "),e("li",[t._v("Resource server：资源服务器，即服务提供商存放用户生成的资源的服务器，它与认证服务器，可以是同一台服务器，也可以是不同的服务器。")])]),t._v(" "),e("p",[t._v('知道了上面的名词，就不难理解，OAuth 的作用就是让 "客户端" 安全可控地获取 "用户的授权"，与 "服务提供商" 进行互动。')]),t._v(" "),e("h2",{attrs:{id:"三、oauth-思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、oauth-思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、OAuth 思路")]),t._v(" "),e("p",[t._v('OAuth 在 "客户端" 和 "服务提供商" 之间，设置了一个授权层 ( authorization )。"客户端" 不能直接登录 "服务提供商"，只能通过登录授权层，以此将用户与客户端区分开来。"客户端" 登录授权层所用的令牌 ( token )，与用户的密码不同。用户可以在登录的时候，制定授权层令牌的权限范围和有效期')]),t._v(" "),e("h2",{attrs:{id:"四、运行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、运行流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、运行流程")]),t._v(" "),e("p",[t._v("OAuth 2.0的运行流程如下图，摘自RFC 6749。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051203.png",alt:"OAuth运行流程"}})]),t._v(" "),e("ul",[e("li",[t._v("A：用户打开客户端之后，客户端要求用户给与授权。")]),t._v(" "),e("li",[t._v("B：用户同意给与客户端授权。")]),t._v(" "),e("li",[t._v("C：客户端使用上一步获得的授权，想认证服务器申请令牌。")]),t._v(" "),e("li",[t._v("D：认证服务器对客户端进行认证之后，确认无误，同意发放令牌。")]),t._v(" "),e("li",[t._v("E：客户端使用令牌，向资源服务器申请获取资源。")]),t._v(" "),e("li",[t._v("F：资源服务器确认令牌无误，同意向客户端开放资源。")])]),t._v(" "),e("p",[t._v("不难看出，上面六个步骤之中，B 是关键，即用户怎样才能给与客户端授权。有了这个授权之后，客户端就可以获取令牌，进而凭令牌获取资源。")]),t._v(" "),e("p",[t._v("下面一一讲解客户端获取授权的四种模式。")]),t._v(" "),e("h2",{attrs:{id:"五、客户端的授权模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、客户端的授权模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、客户端的授权模式")]),t._v(" "),e("p",[t._v("客户端必须得到用户的授权 ( authorization grant )，才能获得令牌 ( access token )。OAuth 2.0 定义了四种授权方式：")]),t._v(" "),e("ol",[e("li",[t._v("授权码方式 ( authorization code )")]),t._v(" "),e("li",[t._v("简化模式 ( implicit )")]),t._v(" "),e("li",[t._v("密码模式 ( resource owner password credentials )")]),t._v(" "),e("li",[t._v("客户端模式 ( client credentials )")])]),t._v(" "),e("h2",{attrs:{id:"六、授权码模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、授权码模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 六、授权码模式")]),t._v(" "),e("p",[t._v('授权码模式 ( authorization code )，是功能最完整、流程最严密的授权模式。它的特点就是通过客户端的后台服务器，与 "服务提供商" 的认证服务器进行互动。')]),t._v(" "),e("p",[e("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051204.png",alt:"bg2014051204"}})]),t._v(" "),e("p",[t._v("它的步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("用户访问客户端，后者将前者导向认证服务器。")]),t._v(" "),e("li",[t._v("用户选择是否给与客户端授权。")]),t._v(" "),e("li",[t._v('假设用户给与授权，认证服务器将用户导向客户端事先指定的 "重定向 URI" ( redirection URI )，同时附上一个授权码。')]),t._v(" "),e("li",[t._v('客户端收到授权码，附上早先的 "重定向 URI"，向认证服务器申请令牌。这一步是在客户端的后台服务器上完成的，对用户不可见。')]),t._v(" "),e("li",[t._v("认证服务器核对了授权码和重定向 URI，确认无误之后，向客户端发送访问令牌 ( access token ) 和更新令牌 ( refresh token )。")])]),t._v(" "),e("p",[t._v("下面是上面这些步骤所需要的参数：")]),t._v(" "),e("p",[e("strong",[t._v("第一步中，客户端申请认证的 URI，包含以下参数：")])]),t._v(" "),e("ul",[e("li",[t._v('response_type：表示授权类型，必选项，此处的值固定为 "Code"。')]),t._v(" "),e("li",[t._v("client_id：表示客户端 ID，必选项。")]),t._v(" "),e("li",[t._v("redirect_id：表示重定向 URI，可选项。")]),t._v(" "),e("li",[t._v("scope：表示申请的权限范围，可选项。")]),t._v(" "),e("li",[t._v("state：表示客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值。")])]),t._v(" "),e("p",[t._v("下面是一个例子：")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("GET /authorize?response_type=code&client_id=s6BhdRkqt3&state=xyz\n        &redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" server.example.com\n")])])]),e("p",[e("strong",[t._v("第三步中，服务器回应客户端的 URI，包含以下参数：")])]),t._v(" "),e("ul",[e("li",[t._v("code：表示授权码，必选项。该码的有效期应该很短，通常设置为 10 分钟，客户端只能使用该码一次，否则会被授权服务器拒绝。该码与客户端 ID 和 重定向 URI，是一一对应的关系。")]),t._v(" "),e("li",[t._v("state：如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数。")])]),t._v(" "),e("p",[t._v("下面是一个例子：")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("302 Found")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Location:")]),t._v(" https://client.example.com/cb?code=SplxlOBeZQQYbYS6WxSbIA\n          &state=xyz\n\n")])])]),e("p",[e("strong",[t._v("第四步中，客户端向认证服务器申请令牌的 HTTP 请求，包含以下参数：")])]),t._v(" "),e("ul",[e("li",[t._v('grant_type：表示使用的授权模式，必选项，此处的值固定为 "authorization_code"。')]),t._v(" "),e("li",[t._v("code：表示上一步获得的授权码，必填。")]),t._v(" "),e("li",[t._v("redirect_uri：表示重定向 URI，必选项，必须和第一步中的参数值保持一致。")]),t._v(" "),e("li",[t._v("client_id：表示客户端 ID，必填。")])]),t._v(" "),e("p",[t._v("下面是一个例子：")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("POST")]),t._v(" /token HTTP/1.1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" server.example.com\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Authorization:")]),t._v(" Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/x-www-form-urlencoded\n\ngrant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA\n&redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb\n")])])]),e("p",[e("strong",[t._v("第五步中，认证服务器发送的 HTTP 回复，包含以下参数：")])]),t._v(" "),e("ul",[e("li",[t._v("access_token：表示访问令牌，必选项。")]),t._v(" "),e("li",[t._v("token_type：表示令牌类型，该值大小写不敏感，必选项，可以是bearer类型或mac类型。")]),t._v(" "),e("li",[t._v("expires_in：表示过期时间，单位为秒。如果省略该参数，必须其他方式设置过期时间。")]),t._v(" "),e("li",[t._v("refresh_token：表示更新令牌，用来获取下一次的访问令牌，可选项。")]),t._v(" "),e("li",[t._v("scope：表示权限范围，如果与客户端申请的范围一致，此项可省略。")])]),t._v(" "),e("p",[t._v("下面是一个例子：")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v('  HTTP/1.1 200 OK\n  Content-Type: application/json;charset=UTF-8\n  Cache-Control: no-store\n  Pragma: no-cache\n  \n  {\n    "access_token":"2YotnFZFEjr1zCsicMWpAA",\n    "token_type":"example",\n    "expires_in":3600,\n    "refresh_token":"tGzv3JOkF0XG5Qx2TlKWIA",\n    "example_parameter":"example_value"\n  }\n')])])]),e("p",[t._v("从上面的代码可以看出，相关参数使用 JSON 格式发送 ( Content-Type: application/json )。此外，HTTP 头信息中明确指定不得缓存。")]),t._v(" "),e("h2",{attrs:{id:"七、简化模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、简化模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 七、简化模式")]),t._v(" "),e("p",[t._v('简化模式 ( implicit grant type ) 不通过第三方应用程序的服务器，直接在浏览器中向认证服务器申请令牌，跳过了 "授权码" 这个步骤，因此得名。所有步骤在浏览器中完成，令牌对访问者是可见的，且客户端不需要认证。')]),t._v(" "),e("p",[e("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051205.png",alt:"bg2014051205"}})]),t._v(" "),e("p",[t._v("它的步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("客户端将用户导向认证服务器。")]),t._v(" "),e("li",[t._v("用户决定是否给于客户端授权。")]),t._v(" "),e("li",[t._v('假设用户给予授权，认证服务器将用户导向客户端指定的 "重定向URI" ，并在 URI 的 Hash 部分包含了访问令牌。')]),t._v(" "),e("li",[t._v("浏览器向资源服务器发出请求，其中不包括上一步收到的 Hash 值。")]),t._v(" "),e("li",[t._v("资源服务器返回一个网页，其中包含的代码可以获取 Hash 值中的令牌。")]),t._v(" "),e("li",[t._v("浏览器执行上一步获得的脚本，提取出令牌。")]),t._v(" "),e("li",[t._v("浏览器将令牌发给客户端。")])]),t._v(" "),e("p",[t._v("下面是上面这些步骤所需要的参数。")]),t._v(" "),e("p",[e("strong",[t._v("第一步骤中，客户端发出的HTTP请求，包含以下参数：")])]),t._v(" "),e("ul",[e("li",[t._v('response_type：表示授权类型，此处的值固定为"token"，必选项。')]),t._v(" "),e("li",[t._v("client_id：表示客户端的ID，必选项。")]),t._v(" "),e("li",[t._v("redirect_uri：表示重定向的URI，可选项。")]),t._v(" "),e("li",[t._v("scope：表示权限范围，可选项。")]),t._v(" "),e("li",[t._v("state：表示客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值。")])]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("GET /authorize?response_type=token&client_id=s6BhdRkqt3&state=xyz\n    &redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" server.example.com\n")])])]),e("p",[e("strong",[t._v("第三步骤中，认证服务器回应客户端的URI，包含以下参数：")])]),t._v(" "),e("ul",[e("li",[t._v("access_token：表示访问令牌，必选项。")]),t._v(" "),e("li",[t._v("token_type：表示令牌类型，该值大小写不敏感，必选项。")]),t._v(" "),e("li",[t._v("expires_in：表示过期时间，单位为秒。如果省略该参数，必须其他方式设置过期时间。")]),t._v(" "),e("li",[t._v("scope：表示权限范围，如果与客户端申请的范围一致，此项可省略。")]),t._v(" "),e("li",[t._v("state：如果客户端的请求中包含这个参数，认证服务器的回应也必须一模一样包含这个参数。")])]),t._v(" "),e("p",[t._v("下面是一个例子。")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("302 Found")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Location:")]),t._v(" http://example.com/cb#access_token=2YotnFZFEjr1zCsicMWpAA\n          &state=xyz&token_type=example&expires_in=3600\n")])])]),e("p",[t._v("在上面的例子中，认证服务器用 HTTP 头信息的 Location 栏，指定浏览器重定向的网址。注意，在这个网址的 Hash 部分包含了令牌。")]),t._v(" "),e("p",[t._v("根据上面的第四步骤，下一步浏览器会访问 Location 指定的网址，但是 Hash 部分不会发送。接下来的第五步骤，服务提供商的资源服务器发送过来的代码，会提取出 Hash 中的令牌。")]),t._v(" "),e("h2",{attrs:{id:"八、密码模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、密码模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 八、密码模式")]),t._v(" "),e("p",[t._v('密码模式（ Resource Owner Password Credentials Grant ）中，用户向客户端提供自己的用户名和密码。客户端使用这些信息，向 "服务商提供商" 索要授权。')]),t._v(" "),e("p",[t._v("在这种模式中，用户必须把自己的密码给客户端，但是客户端不得储存密码。这通常用在用户对客户端高度信任的情况下，比如客户端是操作系统的一部分，或者由一个著名公司出品。而认证服务器只有在其他授权模式无法执行的情况下，才能考虑使用这种模式。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051206.png",alt:"bg2014051206"}})]),t._v(" "),e("p",[t._v("它的步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("用户向客户端提供用户名和密码。")]),t._v(" "),e("li",[t._v("客户端将用户名和密码发给认证服务器，向后者请求令牌。")]),t._v(" "),e("li",[t._v("认证服务器确认无误后，向客户端提供访问令牌。")])]),t._v(" "),e("p",[e("strong",[t._v("第二步中，客户端发出的 HTTP 请求，包含以下参数：")])]),t._v(" "),e("ul",[e("li",[t._v('grant_type：表示授权类型，此处的值固定为 "password"，必选项。')]),t._v(" "),e("li",[t._v("username：表示用户名，必选项。")]),t._v(" "),e("li",[t._v("password：表示用户的密码，必选项。")]),t._v(" "),e("li",[t._v("scope：表示权限范围，可选项。")])]),t._v(" "),e("p",[t._v("下面是一个例子：")]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("POST")]),t._v(" /token HTTP/1.1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" server.example.com\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Authorization:")]),t._v(" Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/x-www-form-urlencoded\n\ngrant_type=password&username=johndoe&password=A3ddj3w\n")])])]),e("p",[e("strong",[t._v("第三步中，认证服务器向客户端发送访问令牌，下面是一个例子：")])]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("200 OK")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/json;charset=UTF-8\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Cache-Control:")]),t._v(" no-store\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Pragma:")]),t._v(" no-cache"),e("span",{pre:!0,attrs:{class:"token application/json"}},[t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access_token"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2YotnFZFEjr1zCsicMWpAA"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token_type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expires_in"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"refresh_token"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tGzv3JOkF0XG5Qx2TlKWIA"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_parameter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_value"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("p",[t._v("整个过程中，客户端不得保存用户的密码。")]),t._v(" "),e("h2",{attrs:{id:"九、客户端模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九、客户端模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 九、客户端模式")]),t._v(" "),e("p",[t._v('客户端模式（ Client Credentials Grant ）指客户端以自己的名义，而不是以用户的名义，向 "服务提供商" 进行认证。严格地说，客户端模式并不属于 OAuth 框架所要解决的问题。在这种模式中，用户直接向客户端注册，客户端以自己的名义要求 "服务提供商" 提供服务，其实不存在授权问题。')]),t._v(" "),e("p",[e("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051207.png",alt:"bg2014051207"}})]),t._v(" "),e("p",[t._v("它的步骤很简单：")]),t._v(" "),e("ol",[e("li",[t._v("客户端向认证服务器进行身份认证，并要求一个访问令牌。")]),t._v(" "),e("li",[t._v("认证服务器确认无误之后，向客户端提供访问令牌。")])]),t._v(" "),e("p",[e("strong",[t._v("第一步中，客户端发送的 HTTP 包含以下参数：")])]),t._v(" "),e("ul",[e("li",[t._v('grant_type：表示授权类型，此处的值固定为 "clientcredentials" ，必选项。')]),t._v(" "),e("li",[t._v("scope：表示权限范围，可选项。")])]),t._v(" "),e("div",{staticClass:"language-HTTP extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("POST")]),t._v(" /token HTTP/1.1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" server.example.com\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Authorization:")]),t._v(" Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/x-www-form-urlencoded\n\ngrant_type=client_credentials\n")])])]),e("p",[t._v("认证服务器必须以某种方式，验证客户端身份。")]),t._v(" "),e("p",[e("strong",[t._v("第二步中，认证服务器向客户端发送访问令牌：")])]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("200 OK")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/json;charset=UTF-8\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Cache-Control:")]),t._v(" no-store\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Pragma:")]),t._v(" no-cache"),e("span",{pre:!0,attrs:{class:"token application/json"}},[t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access_token"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2YotnFZFEjr1zCsicMWpAA"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token_type"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expires_in"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_parameter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_value"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),e("h2",{attrs:{id:"十、更新令牌"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十、更新令牌","aria-hidden":"true"}},[t._v("#")]),t._v(" 十、更新令牌")]),t._v(" "),e("p",[t._v('如果用户访问的时候，客户端的"访问令牌"已经过期，则需要使用"更新令牌"申请一个新的访问令牌。')]),t._v(" "),e("p",[t._v("客户端发出更新令牌的HTTP请求，包含以下参数：")]),t._v(" "),e("ul",[e("li",[t._v('grant_type：表示使用的授权模式，此处的值固定为"refreshtoken"，必选项。')]),t._v(" "),e("li",[t._v("refresh_token：表示早前收到的更新令牌，必选项。")]),t._v(" "),e("li",[t._v("scope：表示申请的授权范围，不可以超出上一次申请的范围，如果省略该参数，则表示与上一次一致。")])]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v(" POST /token HTTP/1.1\n Host: server.example.com\n Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW\n Content-Type: application/x-www-form-urlencoded\n\ngrant_type=refresh_token&refresh_token=tGzv3JOkF0XG5Qx2TlKWIA\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);