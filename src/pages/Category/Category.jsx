import './Category.scss';
import React from 'react';
import Header from '../../components/Header/Header';
import CategoryMenus from '../../components/Category/Menus/Menus';
import CategoryExhibitions from '../../components/Category/Exhibitions/Exhibitions';
import categoryMock from '../../mock/category';
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
    };
    this.categories = categoryMock;
    this.menus = categoryMock.map((item) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
  }

  onChooseMenus(id) {
    this.setState({
      categoryId: id,
    });
    this.setState({ category: this.getCategoryById(id) });
  }

  onChooseCategory(item) {
    console.log(item);
  }

  getCategoryById(id) {
    for (let item of this.categories) {
      if (item.id == id) {
        return item;
      }
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <Header title='分类'></Header>
        <div className='category-menus content-wrap'>
          {/* 分类栏 */}
          <CategoryMenus onChooseMenus={this.onChooseMenus.bind(this)} menus={this.menus} />
          {/* 详细介绍 */}
          <CategoryExhibitions onChooseCategory={this.onChooseCategory.bind(this)} category={this.state.category} />
        </div>
      </React.Fragment>
    );
  }
}

export default Category;
