[
  {
    "question": "谈谈性能优化问题",
    "answer": "代码层面：<br>\n一、避免使用 css 表达式，避免使用高级选择器，通配选择器。<br>\n二、缓存利用：缓存 Ajax，使用 CDN，使用外部 js 和 css 文件以便缓存，添加Expires 头，服务端配置 Etag，减少 DNS 查找等<br>\n三、请求数量：合并样式和脚本，使用 css 图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。<br>\n四、请求带宽：压缩文件，开启 GZIP<br>"
  },
  {
    "question": "ES6的了解",
    "answer": "新增模板字符串（为 JavaScript 提供了简单的字符串插值功能）、箭头函数（操作符左边为输入的参数，而右边则是进行的操作以及返回的值Inputs=&gt;outputs 。）、 for-of （用来遍历数据—例如数组中的值。） arguments对象可被不定参数和默认参数完美代替。 ES6 将 promise 对象纳入规范，提供了原生的 Promise 对象。增加了 let 和 const 命令，用来声明变量。增加了块级作用域。let 命令实际上就增加了块级作用域。ES6 规定， var命令和 function 命令声明的全局变量，属于全局对象的属性； let 命令、const 命令、 class 命令声明的全局变量，不属于全局对象的属性。。还有就是引入 module 模块的概念"
  },
  {
    "question": "你觉得jQuery或zepto源码有哪些写的好的地方",
    "answer": "jQuery 源码封装在一个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传入 window 对象参数，可以使 window 对象作为局部变量使用，好处是当 jquery 中访问 window 对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问 window 对象。同样，传入undefined 参数，可以缩短查找 undefined 时的作用域链。"
  },
  {
    "question": "移动端性能优化",
    "answer": "尽量使用 css3动画，开启硬件加速。<br>\n• 适当使用 touch 事件代替 click 事件。<br>\n• 避免使用 css3 渐变阴影效果。<br>\n• 可以用 transform: translateZ(0) 来开启硬件加速。<br>\n• 不滥用 Float。Float在渲染时计算量比较大，尽量减少使用<br>\n• 不滥用 Web字体。Web字体需要下载，解析，重绘当前页面，尽量减少使用。<br>\n• 合理使用 requestAnimationFrame动画代替 setTimeout<br>\n• CSS中的属性（CSS3 transitions、CSS3 3D transforms、Opacity、Canvas、WebGL、Video）会触发 GPU渲染，请合理使用。过渡使用会引发手机过耗电增加<br>\n• PC端的在移动端同样适用<br>"
  },
  {
    "question": "代码层面的优化",
    "answer": "用 hash-table 来优化查找<br>\n少用全局变量<br>\n用 innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript性能<br>\n用 setTimeout 来避免页面失去响应<br>\n缓存 DOM 节点查找的结果<br>\n避免使用 CSS Expression<br>\n避免全局查询<br>\n避免使用 with(with 会创建自己的作用域，会增加作用域链长度) 多个变量声明合并<br>\n避免图片和 iFrame 等的空 Src。空 Src 会重新加载当前页面，影响速度和效率 尽量避免写在 HTML标签中写 Style属性<br>"
  },
  {
    "question": "渐进增强和优雅降级",
    "answer": "渐进增强 ：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。<br>\n优雅降级 ：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。"
  },
  {
    "question": "说说你对作用域链的理解",
    "answer": "作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到 window 对象即被终止，作用域链向下访问变量是不被允许的。"
  },
  {
    "question": "二次请求三次握手",
    "answer": "二次请求三次握手<br>\n1. 在浏览器中输入url<br>\n2.应用层DNS解析域名<br>\n3.应用层客户端发送HTTP请求<br>\n4.传输层TCP传输报文<br>\n5.网络层IP协议查询MAC地址<br>\n6.数据到达数据链路层<br>\n7.服务器接收数据<br>\n8.服务器响应请求<br>\n9. 服务器返回相应文件"
  },
  {
    "question": "谈谈你对webpack的看法",
    "answer": "WebPack 是一个模块打包工具，你可以使用 WebPack 管理你的模块依赖，并编绎输出模块们所需的静态文件。它能够很好地管理、打包 Web 开发中所用到的 HTML、JavaScript、CSS 以及各种静态文件（图片、字体等），让开发过程更加高效。对于不同类型的资源， webpack 有对应的模块加载器。 webpack 模块打包器会分析模块间的依赖关系，最后 生成了优化且合并后的静态资源。"
  },
  {
    "question": "promise常用的几种方法",
    "answer": "promise<br>\n&nbsp; &nbsp;.then&nbsp; 成功返回执行<br>\n&nbsp; &nbsp;.catch&nbsp; &nbsp; 失败返回执行<br>\n&nbsp; &nbsp;.finally&nbsp; &nbsp; 成功和失败都会返回执行"
  },
  {
    "question": "6种this的指向",
    "answer": "<img alt=\"\" src=\"/uploads/allimg/180929/1-1P92ZS409E7.jpg\" style=\"width: 100%;\">"
  },
  {
    "question": "超出文字显示省略号",
    "answer": "<img alt=\"\" src=\"/uploads/allimg/180928/1-1P92QRP02D.jpg\" style=\"width: 100%;\">"
  },
  {
    "question": "简述一下src与href的区别",
    "answer": "src用于替换当前元素，href用于在当前文档和引用资源之间确立联系。<br>\nsrc是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。<br>\n&lt;script src =”js.js”&gt;&lt;/script&gt;<br>\n当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。<br>\nhref是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加<br>\n&lt;link href=”common.css” rel=”stylesheet”/&gt;<br>\n那么浏览器会识别该文档为css文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用link方式来加载css，而不是使用@import方式。"
  },
  {
    "question": "CSS画出一个三角形",
    "answer": "&lt;div class=\"czl\"&gt;&lt;/div&gt;<br>\n<img alt=\"\" src=\"/uploads/allimg/180928/1-1P92QA114R6.jpg\" style=\"width: 100%;\">"
  },
  {
    "question": "JS有哪些内置对象",
    "answer": "数据封装类对象：Object 、Array 、Boolean 、 Number&nbsp;和 String<br>\n<br>\n其它对象：Function 、Arguments、Math、Date、RegExp、Error、"
  },
  {
    "question": "数组去重复值",
    "answer": "es6<br>\nvar arr = new Set(数组)<br>\nvar arr2 = Array.from(arr)<br>\n<br>\n原生<br>\nvar arr = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 6, 5, 8, 5, 4, 5, 10, 15, 5, 8, 20, 8,20,5,7]<br>\nvar all = []<br>\nfor (var i = 0; i &lt; arr.length; i++) {<br>\nif (all.indexOf(arr[i]) == -1 ) {<br>\nall.push(arr[i])<br>\n} }"
  },
  {
    "question": "JQuery一个对象可以同时绑定多个事件",
    "answer": "bind() 方法为被选元素添加一个或多个事件处理程序，并规定事件发生时运行的函数。<br>\non() 方法事件处理程序到当前选定的jQuery对象中的元素。"
  },
  {
    "question": "['1','2','3'].map(parseInt)返回",
    "answer": "['1','2','3'].map(parseInt)<br>\n<br>\n猜测是由于parseInt(string, radix) 的参数radix必须介于2~36之间，而且字符串string中的数字不能大于radix才能正确返回数字结果值。<br>\n<br>\nparseInt('1',0) = 1,<br>\nparseInt('2',1) = NaN,<br>\nparseInt('3',2) = NaN,"
  },
  {
    "question": "行内元素，块级元素，空元素有哪些",
    "answer": "（1）行内元素有：a b&nbsp; span&nbsp; img&nbsp; input select&nbsp; strong<br>\n（2）块级元素有： div ul ol li dl dt dd h1 h2 h4...p<br>\n（3）常见的空元素：&lt;br&gt;&lt;hr&gt;&lt;img&gt;&lt;input&gt;&lt;link&gt;&lt;meta&gt;<br>\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;鲜为人知的是： &lt;area&gt;，&lt;base&gt;&lt;col&gt;&lt;command&gt;&lt;embed&gt;&lt;keygen&gt;&lt;param&gt;&lt;source&gt;&lt;track&gt;&lt;wbr&gt;"
  },
  {
    "question": "CSS中link和@import的区别是?",
    "answer": "一、Link属于html标签，而@import是CSS中提供的<br>\n二、在页面加载的时候，link会同时被加载，而@import引用的CSS会在页面加载完成后才会加载引用的CSS<br>\n三、@import只有在ie5以上才可以被识别，而link是html标签，不存在浏览器兼容性问题<br>\n四、Link引入样式的权重大于@import的引用（@import是将引用的样式导入到当前的页面中）"
  }
]