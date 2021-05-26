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
