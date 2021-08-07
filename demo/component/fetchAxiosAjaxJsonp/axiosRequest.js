import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '@demo/common/constant';

export default () => {
  const [axiosData, setAxiosData] = useState({});
  useEffect(() => {
    // 把给定的字符串改成驼峰写法
    const str = 'hello world';
    const newStr = str.split(' ').map((val, index) => {
      if (index > 0) {
        return val[0].toUpperCase() + val.slice(1);
      }
      return val;
    });
    const resultStr = newStr.join('');
    console.log('%c 🍎resultStr🍎:', 'color: DarkOrange; background: MidnightBlue; font-size: 20px;', resultStr);
    // An effect function must not return anything besides a function, which is used for clean-up.
    const url = `${baseUrl}/data`;
    // const res = await axios(url);
    async function getData() {
      // const postParam = {
      //   method: 'post',
      //   data: {
      //     name: 'hehe'
      //   }
      // };
      const res = await axios({
        method: 'get',
        url
      });
      setAxiosData(res.data);
      // axios.get('/user', {
      //   params: {
      //     ID: 12345
      //   }
      // })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      // axios.post('/user', {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      // axios({
      //   method: 'get',
      //   url: 'http://bit.ly/2mTM3nY',
      //   responseType: 'stream'
      // })
      //   .then((response) => {
      //     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'));
      //   });

      // function getUserAccount() {
      //   return axios.get('/user/12345');
      // }
      // function getUserPermissions() {
      //   return axios.get('/user/12345/permissions');
      // }
      // Promise.all([getUserAccount(), getUserPermissions()])
      //   .then((results) => {
      //     const acct = results[0];
      //     const perm = results[1];
      //   });

      // axios(`${baseUrl}/data`).then((axiosres) => {
      //   setFetchData(axiosres.data);
      // });
    }
    getData();
  }, []);

  return (
    <div>
      <pre>
        {
          `axiosData:${JSON.stringify(axiosData, null, 2)}`
        }
      </pre>
    </div>
  );
};
