import React, { useContext } from 'react';
import MyContext from './my-context';

export default () => {
  // 每当 Provider(提供者) 的 value 属性发生变化时，所有作为 Provider(提供者) 后代的 consumer(使用者) 组件 都将重新渲染。
  // 从Provider 到其后代使用者的传播不受 shouldComponentUpdate 方法的约束，因此即使祖先组件退出更新，也会更新 consumer(使用者) 。
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
