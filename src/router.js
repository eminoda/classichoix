import Home from './pages/Home';
import Category from './pages/Category';
import User from './pages/User';

const router = [
  {
    path: '/user',
    component: User
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/',
    component: Home
  }
];

export default router;
