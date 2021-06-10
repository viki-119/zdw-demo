import React, { useEffect, useLayoutEffect, useState, lazy, Suspense } from 'react';

// import HookChild from './hookChild';

const HookChild = lazy(() => import('./hookChild'));

export default () => {
  const [count, setCount] = useState(1);

  // 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。
  // 可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
  useLayoutEffect(() => {
    console.log('%c 👍useLayoutEffect👍:', 'color: CornflowerBlue; background: Yellow; font-size: 20px;',);
    // for (let i = 0; i < 50; i += 1) {
    //   setCount((prev) => prev + 1);
    // }
  }, []);

  useEffect(() => {
    // for (let i = 0; i < 50; i += 1) {
    //   setCount((prev) => prev + 1);
    // }
  }, []);

  return (
    <div>
      <a href="https://reactjs.bootcss.com/docs/hooks-reference.html#uselayouteffect">useEffect官方文档</a>
      <Suspense fallback={<div>12e</div>}>
        <HookChild />
      </Suspense>
    </div>
  );
};
