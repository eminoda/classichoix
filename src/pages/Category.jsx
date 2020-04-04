import './Category.scss';
import React from 'react';
import Header from '../components/Header/Header';
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: 2,
    };
    this.categories = [
      {
        name: '品牌',
        id: 1,
      },
      {
        name: '季节',
        id: 2,
      },
      {
        name: '年龄',
        id: 3,
      },
    ];
  }

  chooseCategory(id) {
    this.setState({
      categoryId: id,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Header title='分类'></Header>
        <div className='category-menus content-wrap'>
          <div className='category'>
            {this.categories.map((item) => {
              return (
                <div onClick={(e) => this.chooseCategory(item.id)} key={item.id} className='item' className={`item ${this.state.categoryId === item.id ? 'selected' : ''}`}>
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className='category-desc'>
            <div className='item'>
              <img src='https://img.alicdn.com/tfscom/TB1bmx1e8fM8KJjSZFhXXcRyFXa.jpg_q90.jpg'></img>
              <div className='text'>巴拉巴拉</div>
            </div>
            <div className='item'>
              <img src='https://img.alicdn.com/tfscom/TB1bmx1e8fM8KJjSZFhXXcRyFXa.jpg_q90.jpg'></img>
              <div className='text'>巴拉巴拉</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Category;
