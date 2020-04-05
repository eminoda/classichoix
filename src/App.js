require('./style.scss');
import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import router from './router';
import FooterHoc from './components/Footer/Footer';
import RouteWithRoutes from './components/RouteWithRoutes';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.router = router;
    this.tabbars = [
      {
        key: '1',
        path: '/',
        title: '首页',
        icon: 'icon-home',
      },
      {
        key: '2',
        path: '/category',
        title: '分类',
        icon: 'icon-integral',
      },
      {
        key: '3',
        path: '/user',
        title: '我的',
        icon: 'icon-zhanghucaozuo',
      },
    ];
  }
  render() {
    return (
      <Router>
        <Switch>
          {this.router.map((item, index) => {
            return <RouteWithRoutes key={index} {...item}></RouteWithRoutes>;
          })}
        </Switch>
      </Router>
    );
  }
}
export default App;
