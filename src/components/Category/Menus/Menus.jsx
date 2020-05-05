import './Menus.scss';
import React from 'react';
class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: '',
    };
  }

  componentDidMount() {
    this.initDefaultId();
  }

  initDefaultId() {
    const defaultId = this.props.defaultId || this.props.menus[0].id;
    if (defaultId) {
      this.chooseMenus(defaultId);
    }
  }

  chooseMenus(id) {
    this.setState({ currentId: id });
    this.props.onChooseMenus(id);
  }

  render() {
    return (
      <div className='menus-wrap'>
        {this.props.menus.map((item) => {
          return (
            <div className={`item ${this.state.currentId === item.id ? 'selected' : ''}`} key={item.id} onClick={(e) => this.chooseMenus(item.id)}>
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Menus;
