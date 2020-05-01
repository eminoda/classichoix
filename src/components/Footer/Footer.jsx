import React from 'react';
import './Footer.scss';
import { withRouter } from 'react-router';
import { TabBar } from 'antd-mobile';
class Footer extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.tabbars = [
      {
        path: '/',
        title: '首页',
        icon: 'icon-home',
      },
      {
        path: '/category',
        title: '分类',
        icon: 'icon-integral',
      },
      {
        path: '/user',
        title: '我的',
        icon: 'icon-zhanghucaozuo',
      },
    ];
    this.state = {
      selectedTab: this.props.location.pathname,
    };
  }

  selectTab(item) {
    this.setState({
      selectedTab: item.path,
    });
    this.props.history.push(item.path);
  }

  render() {
    return (
      <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
        <TabBar unselectedTintColor='#949494' tintColor='#faa573' barTintColor='white'>
          {this.tabbars.map((item, index) => (
            <TabBar.Item
              title={item.title}
              key={index}
              icon={<div className={'tab-icon iconfont ' + item.icon} />}
              selectedIcon={<div className={'tab-icon iconfont ' + item.icon} />}
              selected={this.state.selectedTab === item.path}
              onPress={this.selectTab.bind(this, item)}
              data-seed='logId'
            ></TabBar.Item>
          ))}
        </TabBar>
      </div>
    );
  }
}
const FooterHoc = withRouter(Footer);
export default FooterHoc;
