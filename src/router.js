import Home from './pages/Home/Home';
import User from './pages/User/User';
import Category from './pages/Category/Category';
// import Products from './pages/Products';

const router = [
  {
    path: '/user',
    component: User,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/',
    component: Home,
  },
];
// const router = [
//   {
//     path: '/products',
//     component: Products,
//   },
//   {
//     path: '/',
//     component: Main,
//     routes: [
//       {
//         path: '/user',
//         component: User,
//       },
//       {
//         path: '/category',
//         component: Category,
//       },
//       {
//         path: '/',
//         component: Home,
//       },
//     ],
//   },
// ];

export default router;
