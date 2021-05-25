import React, { PureComponent } from 'react';
import axios from 'axios';
import { baseUrl } from '@demo/common/constant';

import Context from './my-context';
import Child from './child';
import HookChild from './hookChild';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      provideData: {}
    };
  }

  componentDidMount() {
    axios(`${baseUrl}/data`).then((axiosres) => {
      this.setState({
        provideData: axiosres.data
      });
    });
  }

  render() {
    const { provideData } = this.state;
    return (
    // 使用 Context.Provider 包裹后续组件，value 指定值
    // Context 旨在共享一个组件树内可被视为 “全局” 的数据
    // 使用 context, 我们可以避免通过中间元素传递 props
      <>
        <Context.Provider value={provideData}>
          <div className="App">
            <Child />
            <HookChild />
          </div>
        </Context.Provider>
      </>
    );
  }
}

export default App;
