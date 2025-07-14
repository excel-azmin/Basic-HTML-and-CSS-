import { NavLink } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Notfound() {
  return (
    <div>
      <Navbar />
      <div className="hero lg:py-70 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
            <p className="py-6">
              The page you are looking for does not exist. Please check the URL
              or return to the
              <NavLink to="/" className="link link-primary font-bold text-2xl">
                {' '}
                Home
              </NavLink>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
