import React from 'react';
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
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar unselectedTintColor='#949494' tintColor='#faa573' barTintColor='white'>
          {this.props.list.map(item => (
            <TabBar.Item
              title={item.title}
              key={item.key}
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
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
