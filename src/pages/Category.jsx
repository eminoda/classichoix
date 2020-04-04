import './Category.scss';
import React from 'react';
import Header from '../components/Header/Header';
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: 1,
    };
    this.categories = [
      {
        name: '品牌',
        id: 1,
        desc: [
          {
            pic: 'https://img.alicdn.com/tfscom/TB1bmx1e8fM8KJjSZFhXXcRyFXa.jpg_q90.jpg',
            name: '巴拉巴拉',
          },
          {
            pic: 'https://img.alicdn.com/tfscom/TB1bmx1e8fM8KJjSZFhXXcRyFXa.jpg_q90.jpg',
            name: '巴拉巴拉',
          },
        ],
      },
      {
        name: '季节',
        id: 2,
        desc: [
          {
            name: '巴拉巴拉1',
          },
          {
            name: '巴拉巴拉2',
          },
        ],
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
            {this.categories.map((item) => {
              if (item.id === this.state.categoryId) {
                const desc = item.desc;
                if (desc && desc.length > 0) {
                  return desc.map((item, index) => {
                    return (
                      <div key={index} className='item'>
                        {item.pic && <img src={item.pic}></img>}
                        <div className='text'>{item.name}</div>
                      </div>
                    );
                  });
                }
              }
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Category;
