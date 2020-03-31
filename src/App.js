require('./style.scss');
import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import router from './router';
import FooterHoc from './components/Footer';
import Item from 'antd-mobile/lib/popover/Item';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.router = router;
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
            {this.router.map(item => (
              <Route path={item.path} component={item.component} key={item.path} />
            ))}
          </Switch>
          {/* tabbar */}
          <FooterHoc list={this.tabbars}></FooterHoc>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
