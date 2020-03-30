require('./style.scss');
import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/Home';
import Category from './pages/Category';
import User from './pages/User';
import FooterHoc from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.tabbars = [
      {
        key: '1',
        path: '/',
        title: '首页'
      },
      {
        key: '2',
        path: '/category',
        title: '分类'
      },
      {
        key: '3',
        path: '/user',
        title: '我的'
      }
    ];
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
          <FooterHoc list={this.tabbars}></FooterHoc>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
