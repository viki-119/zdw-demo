import React, { PureComponent } from 'react';
import Context from './my-context';

export default class Child extends PureComponent {
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

  fixFun = (str, fixStr, len) => Array(len).fill(fixStr).join('') + str;

  render() {
    return (
      <div>
        <Context.Consumer>
          { // Context.Consumer Consumer消费者使用Context的值
          // 但子组件不能是其他组件，必须渲染一个函数，函数的参数就是Context的值
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
