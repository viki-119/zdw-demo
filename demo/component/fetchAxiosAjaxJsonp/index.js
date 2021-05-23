import React from 'react';
import FetchRequest from './fetchRequest';
import AxiosRequest from './axiosRequest';

export default class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <FetchRequest />
        <AxiosRequest />
      </div>
    );
  }
}
