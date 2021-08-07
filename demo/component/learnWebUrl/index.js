import React from 'react';

export default () => {
  // const obj = {};
  // const yy = obj ?? {};
  const arr = [
    {
      url: 'https://regexper.com',
      name: '正则表达式可视化网站'
    },
    {
      url: 'https://regexr.com/',
      name: '这个网站是对正则表达式进行'
    },
    {
      url: 'https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=zh-cn',
      name: '回流和重构-mdn'
    },
    {
      url: 'https://zhuanlan.zhihu.com/p/52076790',
      name: '回流和重构-zhihu'
    },
    {
      url: 'https://zh-hans.reactjs.org/docs/react-api.html#reactmemo',
      name: 'memo-官方'
    },
    {
      url: 'http://react-china.org/t/react-memo-lazy-suspense-hooks/28789',
      name: 'React新特性实例详解'
    },
    {
      url: 'http://www.itheima.com/news/20200805/162011.html',
      name: 'javascript预解析机制'
    },
    {
      url: 'https://zhuanlan.zhihu.com/p/26027085',
      name: 'React Fiber'
    },
    {
      url: 'https://reactjs.bootcss.com/docs/hooks-reference.html#uselayouteffect',
      name: 'useEffect官方文档'
    },
    {
      url: 'https://www.cnblogs.com/1549983239yifeng/p/14656861.html',
      name: '可选链 & 双问号1',
      text: '@babel/plugin-proposal-class-properties'
    },
    {
      url: 'https://www.cnblogs.com/fundebug/p/javascript-nullish-coalescing.html',
      name: '可选链 & 双问号2'
    },
    {
      url: 'https://code.visualstudio.com/docs/languages/jsconfig',
      name: 'jsconfig 官方文档'
    },
    {
      url: 'https://blog.csdn.net/my_new_way/article/details/105993520',
      name: 'jsconfig 配合webpack alis使用'
    },
    {
      url: 'https://www.jianshu.com/p/4ea2c5571123',
      name: 'jsconfig 路径补全(Path Intellisense)插件不能识别'
    }
  ];
  return (
    <div>
      {
        arr.map((item, index) => (
          <h2 key={index}>
            <a target="_blank" href={item.url} rel="noreferrer">
              {item.name}
            </a>
            <div>{item.text}</div>
          </h2>
        ))
      }
      <p>第一阶段Reconciliation Phase，React Fiber会找出需要更新哪些DOM，这个阶段是可以被打断的</p>
      <p>第二阶段Commit Phase，那就一鼓作气把DOM更新完，绝不会被打断</p>
    </div>
  );
};
