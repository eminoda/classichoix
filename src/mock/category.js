import spring from '../assets/images/season/spring.png';
import summer from '../assets/images/season/summer.png';
import autumn from '../assets/images/season/autumn.png';
import winter from '../assets/images/season/winter.png';
import hat from '../assets/images/location/hat.png';
import clothes from '../assets/images/location/clothes.png';
import pant from '../assets/images/location/pant.png';
import shoes from '../assets/images/location/shoes.png';
import decorate from '../assets/images/location/decorate.png';
import underwear from '../assets/images/location/underwear.png';
import other from '../assets/images/location/other.png';
import little from '../assets/images/age/little.png';
import small from '../assets/images/age/small.png';
import middle from '../assets/images/age/middle.png';
import big from '../assets/images/age/big.png';
import mz from '../assets/images/type/mz.png';
import wt from '../assets/images/type/wt.png';
import wy from '../assets/images/type/wy.png';
import wz from '../assets/images/type/wz.png';
import xz from '../assets/images/type/xz.png';
import dx from '../assets/images/type/dx.png';
import dq from '../assets/images/type/dq.png';
import my from '../assets/images/type/my.png';
import mj from '../assets/images/type/mj.png';
import kz from '../assets/images/type/kz.png';

export default [
  {
    name: '品牌',
    id: 1,
    desc: [
      {
        pic: 'https://img.alicdn.com/tfscom/TB1bmx1e8fM8KJjSZFhXXcRyFXa.jpg_q90.jpg',
        name: '巴拉巴拉',
      },
      {
        pic: 'https://img12.360buyimg.com/cms/jfs/t1/24576/10/5818/38046/5c45a871E08be1abb/ad1aea0349560075.jpg',
        name: '好孩子',
      },
      {
        pic: 'https://img14.360buyimg.com/cms/jfs/t1/9634/37/4405/36978/5bda9a29Ec7970ec4/031582954c62cd0a.jpg',
        name: '巴布豆',
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
        pic: spring,
        name: '春',
      },
      { pic: summer, name: '夏' },
      { pic: autumn, name: '秋' },
      { pic: winter, name: '冬' },
    ],
  },
  {
    name: '着装位置',
    id: 3,
    desc: [
      { pic: hat, name: '头' },
      { pic: clothes, name: '上装' },
      { pic: pant, name: '下装' },
      { pic: shoes, name: '脚' },
      { pic: decorate, name: '装饰' },
      { pic: underwear, name: '内衣' },
      { pic: other, name: '其他' },
    ],
  },
  {
    name: '具体款式',
    id: 4,
    desc: [
      { pic: mz, name: '帽' },
      { pic: wt, name: '外套' },
      { pic: dx, name: '短袖' },
      { pic: wy, name: '卫衣' },
      { pic: my, name: '毛衣' },
      { pic: mj, name: '马甲' },
      { pic: kz, name: '裤子' },
      { pic: dq, name: '裙子' },
      { pic: xz, name: '鞋' },
      { pic: wz, name: '袜' },
    ],
  },
  {
    name: '年龄',
    id: 5,
    desc: [
      { pic: little, name: '0-1岁' },
      { pic: small, name: '1-3岁' },
      { pic: middle, name: '4-6岁' },
      { pic: big, name: '7岁以上' },
    ],
  },
  {
    name: '身高(cm)',
    id: 6,
    desc: [
      { pic: little, name: '50-80' },
      { pic: small, name: '80-100' },
      { pic: middle, name: '100-130' },
      { pic: big, name: '130-170' },
    ],
  },
];
