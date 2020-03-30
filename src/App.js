require('./style.scss');
import React from 'react';
import { Button } from 'antd-mobile';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import User from './pages/User';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          {/* pages */}
          <Switch>
            <Route path='/category' component={Category}></Route>
            <Route path='/user' component={User}></Route>
            <Route path='/' component={Home}></Route>
          </Switch>
          {/* tabbar */}
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/category'>Category</Link>
            </li>
            <li>
              <Link to='/user'>User</Link>
            </li>
          </ul>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
