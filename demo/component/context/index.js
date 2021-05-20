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
    fetch('http://localhost:3000/data', {
      method: 'GET',
      mode: 'cors', // no-cors | same-origin | cors
      credentials: 'omit', // omit | include | same-origin
      responseType: 'stream',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
        // 'Content-Type': 'image/jpeg'
      }
      // referrerPolicy: 'origin-when-cross-origin'
    }).then((res) => {
      console.log('%c ❤️res❤️:', 'color: Aquamarine; background: Yellow; font-size: 20px;', res);
      // res.blob().then((tRes) => {
      //   console.log('%c 🇨🇳tRes🇨🇳:', 'color: Indigo; background: DeepPink; font-size: 20px;', tRes);
      // });
    });

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
