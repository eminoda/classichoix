import React from 'react';
import Header from '../components/Header/Header';

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header title='产品列表'></Header>
        <div className='content-wrap'>产品列表</div>
      </React.Fragment>
    );
  }
}
export default Products;
