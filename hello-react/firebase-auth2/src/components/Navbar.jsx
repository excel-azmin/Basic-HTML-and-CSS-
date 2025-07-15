import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

export default function Navbar({ props }) {
  const { pageTitle } = props || {};
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const singOutHandler = () => {
    signOutUser()
      .then(() => {
        console.log('User signed out successfully');
        toast.success('Signed out successfully');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
        alert('Error signing out: ' + error.message);
        toast.error('Error signing out: ' + error.message);
      });
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <NavLink to="/" className=" normal-case text-xl font-bold">
            {pageTitle ? pageTitle : 'Firebase Auth'}
          </NavLink>
        </div>
        <div className="flex gap-2">
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
          {!user?.email && (
            <>
              <Link to="/login" className="btn btn-ghost">
                Login
              </Link>
              <Link to="/register" className="btn btn-ghost">
                Register
              </Link>
            </>
          )}

          {user?.email && (
            <>
              <Link to="/dashboard" className="btn btn-ghost">
                Dashboard
              </Link>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={singOutHandler}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
