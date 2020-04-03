import './Product.scss';
import React from 'react';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.item = this.props.item;
  }
  render() {
    return (
      <div className='product-wrap'>
        <img className='logo-pic' src={this.item.img} alt='' />
        <div className='product-desc'>
          <div>
            <span className='product-tag'>巴拉巴拉</span>
            <span className='product-tag'>春季</span>
            <span className='product-tag'>上装</span>
            <span className='product-tag'>女</span>
          </div>
          <div>
            <span className='product-price'>￥100</span>
            <span className='product-orgin'>淘宝</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
