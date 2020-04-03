import './ProductList.scss';
import '../Product/Product.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Product from '../Product/Product';
import { ListView } from 'antd-mobile';
import productList from '../../mock/productList';
import Banner from '../../components/Banner/Banner';
function List(props) {
  return (
    <React.Fragment>
      <div className='product-list'>{props.children}</div>
    </React.Fragment>
  );
}
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.list = [];
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.dataBlobs = {};
    this.sectionIDs = [];
    this.rowIDs = [];
    this.pagnation = {
      page: 1,
      pageSize: 10,
      totalPage: 1
    };
    this.state = {
      dataSource,
      loading: false,
      canFetch: true
    };
  }
  asyncApi() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve({
          list: productList,
          totalPage: 3
        });
      }, 200);
    });
  }

  loadMore() {
    if (this.state.canFetch) {
      const height = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.listViewRef).parentNode.offsetTop;
      this.asyncApi().then(data => {
        this.list = [...this.list, ...data.list];
        if (this.pagnation.page <= data.totalPage) {
          this.genData(this.list, this.pagnation);
          const tabbarHeight = 50+180;
          this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlobs, this.sectionIDs, this.rowIDs),
            isLoading: false,
            height: height - tabbarHeight
          });
        } else {
          this.setState({
            canFetch: false,
            loading: false
          });
        }
        this.pagnation.page++;
      });
    }
  }
  genData(list, pagnation) {
    const rowIndex = pagnation.page - 1; // array 从零开始
    // 每页
    this.sectionIDs.push(pagnation.page);
    // 每条
    this.rowIDs[rowIndex] = [];
    list.map(item => {
      let id = Number(Math.random() * 10000).toFixed();
      this.rowIDs[rowIndex].push(id);
      this.dataBlobs[id] = item;
    });

    return { dataBlobs: this.dataBlobs, sectionIDs: this.sectionIDs, rowIDs: this.rowIDs };
  }
  componentDidMount() {
    this.loadMore();
  }

  onEndReached() {
    this.setState({
      loading: true
    });

    this.loadMore();
  }
  render() {
    const row = (rowData, sectionID, rowID) => {
      return <Product key={rowID} item={rowData}></Product>;
    };
    return (
      <ListView
        ref={el => (this.listViewRef = el)}
        dataSource={this.state.dataSource}
        renderBodyComponent={() => <List />}
        style={{
          height: this.state.height,
          overflow: 'auto'
        }}
        renderRow={row}
        renderFooter={() => <div>{this.state.loading ? '加载中' : '暂无最新数据'}</div>}
        onEndReachedThreshold={100}
        onEndReached={this.onEndReached.bind(this)}
      ></ListView>
    );
  }
}

export default ProductList;
