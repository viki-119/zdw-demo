import React, { PureComponent } from 'react';
import Child from './child';

import Context from './my-context';

class App extends PureComponent {
  render() {
    return (
    // 使用 Context.Provider 包裹后续组件，value 指定值
      <Context.Provider value={{ age: '22' }}>
        <div className="App">
          <Child />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
