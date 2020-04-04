import './Header.scss';
import React from 'react';
import { withRouter } from 'react-router';
import { NavBar } from 'antd-mobile';
function Header(props) {
  return (
    <NavBar mode='light' icon={<i style={{ fontSize: '20px' }} className='iconfont icon-arrow-lift'></i>} onLeftClick={() => props.history.goBack(-1)}>
      {props.title}
    </NavBar>
  );
}
const HeaderHoc = withRouter(Header);
export default HeaderHoc;
