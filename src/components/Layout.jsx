import React from 'react';
import Footer from './Footer';
class Layout extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedTab: ''
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <Footer list={this.tabbars}></Footer>
      </React.Fragment>
    );
  }
}

export default Layout;
