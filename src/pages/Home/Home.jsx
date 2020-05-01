import './Home.scss';
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
class Home extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Banner></Banner>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Home;
