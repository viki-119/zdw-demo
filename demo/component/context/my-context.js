import React from 'react';

const defaultValue = { name: '默认值' };

// 创建Context的唯一方法
// 创建一个 Context 对象对。当 React 渲染订阅这个Context 对象的组件时，它将从组件树中匹配最接近的 Provider 中读取当前的 context 值。
// defaultValue 参数 仅 当 consumer(使用者) 在树中没有匹配的 Provider(提供则) 时使用它。
// 这有助于在不封装它们的情况下对组件进行测试。注意：将 undefined 作为 Provider(提供者) 值传递不会导致 consumer(使用者) 组件使用 defaultValue 。
const context = React.createContext(defaultValue);
export default context;
