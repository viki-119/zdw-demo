import React, { useEffect, useState } from 'react';
import { baseUrl } from '@demo/common/constant';

export default () => {
  const [fetchData, setFetchData] = useState({});
  useEffect(() => {
    const url = new Request(`${baseUrl}/data`);
    fetch(url, {
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
      const newRes = new Promise((resolve) => {
        resolve(res.json());
        // resolve(res.text());
      });
      newRes.then((cRes) => {
        setFetchData(cRes);
      });
    });
  }, []);

  return (
    <div>
      <pre>
        {
          `fetchData:${JSON.stringify(fetchData, null, 2)}`
        }
      </pre>
    </div>
  );
};
