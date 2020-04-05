import Main from './components/Main';
import Home from './pages/main/Home/Home';
import Category from './pages/main/Category/Category';
import User from './pages/main/User';
import Products from './pages/Products';
const router = [
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/',
    component: Main,
    routes: [
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
    ],
  },
];

export default router;
