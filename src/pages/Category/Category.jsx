import './Category.scss';
import React from 'react';
import Header from '../../components/Header/Header';
import categoryMock from '../../mock/category';
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: 1,
    };
    this.categories = categoryMock;
  }

  chooseCategory(id) {
    this.setState({
      categoryId: id,
    });
  }

  goProductsPage() {
    this.props.history.push('/products');
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
                      <div key={index} className='item' onClick={this.goProductsPage.bind(this)}>
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
