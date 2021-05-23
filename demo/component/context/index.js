import React, { PureComponent } from 'react';
import axios from 'axios';
import Child from './child';
import Context from './my-context';
import { baseUrl } from '../../common/constant';

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
      <Context.Provider value={provideData}>
        <div className="App">
          <Child />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
