import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Notfound from './components/404/Notfound.jsx';
import './index.css';
import RootLayout from './layouts/RootLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Notfound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'dashboard',
        element: (
          <PrivateRoutes>
            {' '}
            <Dashboard />{' '}
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
