import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
