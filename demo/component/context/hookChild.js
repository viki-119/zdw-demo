import React, { useContext, memo } from 'react';
import MyContext from './my-context';

const HookContext = () => {
  console.log('%c ❤️HookContext❤️:', 'color: CornflowerBlue; background: DeepPink; font-size: 20px;',);
  // 接受一个 context（上下文）对象（从 React.createContext 返回的值）并返回当前 context 值，由最近 context 提供程序给 context 。
  // 每当 Provider(提供者) 的 value 属性发生变化时，所有作为 Provider(提供者) 后代的 consumer(使用者) 组件 都将重新渲染。
  // 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。
  // 即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。
  const contextValue = useContext(MyContext);
  return (
    <div>
      <a target="_blank" href="https://zh-hans.reactjs.org/docs/react-api.html#reactmemo" rel="noreferrer">memo-官方</a>
      <br />
      <a target="_blank" href="http://react-china.org/t/react-memo-lazy-suspense-hooks/28789" rel="noreferrer">React新特性实例详解</a>
      <br />
      <a target="_blank" href="http://www.itheima.com/news/20200805/162011.html" rel="noreferrer">javascript预解析机制</a>
      <br />
      <a target="_blank" href="https://zhuanlan.zhihu.com/p/26027085" rel="noreferrer">React Fiber</a>
      <p>第一阶段Reconciliation Phase，React Fiber会找出需要更新哪些DOM，这个阶段是可以被打断的</p>
      <p>第二阶段Commit Phase，那就一鼓作气把DOM更新完，绝不会被打断</p>
      <pre>
        {
          JSON.stringify(contextValue, null, 2)
        }
      </pre>
    </div>
  );
};

const equalFun = (prevProps, nextProps) => {
  console.log('%c 🌽prevProps, nextProps🌽:', 'color: CornflowerBlue; background: MidnightBlue; font-size: 20px;', prevProps, nextProps);
  // 一般根据props的变化来判断是否强制重新渲染
  // 返回false强制渲染， 返回true强制不渲染
  return true;
};

export default memo(HookContext, equalFun);

// 参考文档
// https://blog.csdn.net/weixin_43720095/article/details/104942997

// const MyComponent = React.memo(function MyComponent(props) {
//   /* 只在props更改的时候才会重新渲染 */
// });

// function areEqual(prevProps, nextProps) {
//   /* // 返回true时强制不渲染，返回false时强制渲染
//   return true if passing nextProps to render would return
//   the same result as passing prevProps to render,
//   otherwise return false
//   */
// }
// function MyComponent(props) {
//      /* render using props */
// }
// export default React.memo(MyComponent, areEqual);

// React.memo 为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。
// 如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，
// 以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。
