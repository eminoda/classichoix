import React from 'react';
import Header from '../components/Header/Header';
import ProductList from '../components/ProductList/ProductList';
class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header title='产品列表'></Header>
        <div className='content-wrap'>
          <ProductList></ProductList>
        </div>
      </React.Fragment>
    );
  }
}
export default Products;
