import React from 'react';
import { Route } from 'react-router-dom';

function RouteWithRoutes(route) {
  console.log(route.path);
  // 路由器
  return (
    <Route
      path={route.path}
      render={(props) => {
        const Component = route.component;
        return <Component {...props} routes={route.routes}></Component>;
      }}
    ></Route>
  );
}

export default RouteWithRoutes;
