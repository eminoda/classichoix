require('./style.scss');
import React from 'react';
import { Button, List } from 'antd-mobile';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        React Hello
        <Button type='ghost' size='small' inline>
          small
        </Button>
      </div>
    );
  }
}
export default App;
