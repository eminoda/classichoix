import React from 'react';
import './Footer.scss';
import { withRouter } from 'react-router';
import { TabBar } from 'antd-mobile';
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.location.pathname
    };
  }

  selectTab(item) {
    this.setState({
      selectedTab: item.path
    });
    this.props.history.push(item.path);
  }

  render() {
    return (
      <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
        <TabBar unselectedTintColor='#949494' tintColor='#faa573' barTintColor='white'>
          {this.props.list.map(item => (
            <TabBar.Item
              title={item.title}
              key={item.key}
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
