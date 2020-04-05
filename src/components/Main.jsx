import React from 'react';
import RouteWithRoutes from './RouteWithRoutes';
import { Switch } from 'react-router-dom';
import FooterHoc from './Footer/Footer';
function Main({ routes }) {
  console.log(routes);
  const tabbars = [
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
  return (
    <div>
      <Switch>
        {routes.map((item, index) => {
          1;
          return <RouteWithRoutes key={index} {...item}></RouteWithRoutes>;
        })}
      </Switch>
      <FooterHoc list={tabbars}></FooterHoc>
    </div>
  );
}

export default Main;
