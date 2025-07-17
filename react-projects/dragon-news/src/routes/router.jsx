import { createBrowserRouter } from 'react-router';
import AuthLayout from '../layouts/AuthLayout';
import HomeLayout from '../layouts/HomeLayout';
import NewsLayout from '../layouts/NewsLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/news',
    element: <NewsLayout />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
]);

export default router;
