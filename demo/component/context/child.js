import React, { PureComponent } from 'react';
import Context from './my-context';

export default class Test extends PureComponent {
  // 参考代码： // https://blog.csdn.net/landl_ww/article/details/93514944
  // 1. contextType 只能在类组件中使用
  // 2. 一个组件如果有多个consumer， contextType只对其中一个有效，所以说，contextType 只能有一个
  // 3. 申明静态变量、contextType 将context直接赋值于 contextType
  static contextType = Context;

  render() {
    return (
      <div>
        <Context.Consumer>
          { // Context.Consumer Consumer消费者使用Context得值
          // 但子组件不能是其他组件，必须渲染一个函数，函数的参数就是Context得值
            (props) => {
              console.log('%c 💻props💻:', 'color: Indigo; background: DeepPink; font-size: 20px;', props);
              return (
                <pre>
                  {
                    JSON.stringify(props, null, 2)
                  }
                  {
                    JSON.stringify(this.context, null, 2)
                  }
                </pre>
              );
            }
          }
        </Context.Consumer>
      </div>
    );
  }
}
