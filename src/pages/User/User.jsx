import React from 'react';
import Footer from '../../components/Footer/Footer';

class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(1);
  }
  render() {
    return (
      <React.Fragment>
        <div>user</div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default User;
