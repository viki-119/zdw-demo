import React, { Component } from 'react';
import Context from './my-context';

export default class Child extends Component {
  // 参考代码： // https://blog.csdn.net/landl_ww/article/details/93514944
  // 1. contextType 只能在类组件中使用
  // 2. 一个组件如果有多个consumer， contextType只对其中一个有效，所以说，contextType 只能有一个
  // 3. 申明静态变量、contextType 将context直接赋值于 contextType
  static contextType = Context;

  componentDidMount() {
    const str = '1234355';
    const fixStr = '0';
    const len = 3;
    const result = this.fixFun(str, fixStr, len);
    console.log('%c 👍result👍:', 'color: MediumSpringGreen; background: Aquamarine; font-size: 20px;', result);
    // const tmpStr = str.padStart(5, '0');
    const cc = test('10101010102030123414320', '13748434');
    function test(a, b) {
      const alen = a.length;
      const blen = b.length;
      const max = Math.max(alen, blen);
      const tmpA = a.padStart(max, 0);
      const tmpB = b.padStart(max, 0);
      let resStr = '';
      let needPlus = false;
      for (let i = max - 1; i >= 0; i--) {
        let tmpRes = Number(tmpA.slice(i, i + 1)) + Number(tmpB.slice(i, i + 1));
        if (needPlus) {
          tmpRes += 1;
          needPlus = false;
        }
        if (tmpRes >= 10) {
          needPlus = true;
          resStr = String(tmpRes).slice(-1) + resStr;
        } else {
          resStr = String(tmpRes).slice(-1) + resStr;
        }
      }
      return resStr;
    }
  }

  shouldComponentUpdate() {
    // 这里虽然返回了false， 但是只要provide 的value值发生改变，还是会重新渲染当前组件
    return false;
  }

  fixFun = (str, fixStr, len) => Array(len).fill(fixStr).join('') + str;

  render() {
    return (
      <div>
        {
          // 每当 Provider(提供者) 的 value 属性发生变化时，所有作为 Provider(提供者) 后代的 consumer(使用者) 组件 都将重新渲染。
          // 从Provider 到其后代使用者的传播不受 shouldComponentUpdate 方法的约束，因此即使祖先组件退出更新，也会更新 consumer(使用者) 。
        }
        <Context.Consumer>
          { // Context.Consumer Consumer消费者使用Context的值
            // 但子组件不能是其他组件，必须渲染一个函数，函数的参数就是Context的值
            (provideValue) => (
              <pre>
                {
                  JSON.stringify(provideValue, null, 2)
                }
                {
                  JSON.stringify(this.context, null, 2)
                }
              </pre>
            )
          }
        </Context.Consumer>
      </div>
    );
  }
}
