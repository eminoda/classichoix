import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import banner1 from '../../assets/images/banner/banner1.png';
import banner2 from '../../assets/images/banner/banner2.png';
class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          src: banner1,
          id: 1
        },
        {
          src: banner2,
          id: 2
        }
      ],
      imgHeight: 150
    };
  }
  componentDidMount() {
    // simulate img loading
  }
  render() {
    return (
      <WingBlank>
        <Carousel autoplay infinite>
          {this.state.data.map((val, index) => (
            <a key={val} href='http://www.alipay.com' style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
              <img
                src={val.src}
                alt=''
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 176 });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Banner;
