import './Home.scss';
import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import Banner from '../components/Banner/Banner';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {/* <Banner></Banner> */}
        <ProductList></ProductList>
      </React.Fragment>
    );
  }
}

export default Home;
