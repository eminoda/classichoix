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
