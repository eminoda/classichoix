import './Exhibitions.scss';
import React from 'react';
class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='category-desc'>
        {this.props.category &&
          this.props.category.desc &&
          this.props.category.desc.map((item, index) => {
            return (
              <div key={index} className='item' onClick={(e) => this.props.onChooseCategory(item)}>
                {item.pic && <img src={item.pic}></img>}
                <div className='text'>{item.name}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Menus;
