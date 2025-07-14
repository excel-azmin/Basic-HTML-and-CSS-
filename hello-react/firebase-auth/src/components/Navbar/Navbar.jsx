import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

export default function Navbar() {
  const {user, signOutUser} = useContext(AuthContext);
  console.log('User Info:', user?.email);

  const handleLogout = () => {
    // Handle logout logic here
    signOutUser()
      .then(() => {
        console.log('User logged out');
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
      
    console.log('User logged out');

  };

  return (
    <>
      <div className=" bg-base-300 py-5 sticky top-0 z-50">
        <div className="lg:max-w-11/12 mx-auto navbar ">
          <div className="flex-1">
            <NavLink to='/' className="text-xl font-bold">Pankha Auth</NavLink>
          </div>
          <div>
            <ul className="menu menu-horizontal px-1">
              <li>
                {' '}
                <NavLink to="/"> Home</NavLink>{' '}
              </li>
              <li>
                <NavLink to="dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-none">
            {
               user?.email ? (
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
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                {
                  user?.email && (
                    <li>
                        <a onClick={handleLogout}>Logout</a>
                    </li>
                  )
                }
                
              </ul>
            </div>
               ) : (<div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-download-in-svg-png-gif-file-formats--person-picture-profile-business-pack-illustrations-6515860.png"
                  />
                </div>
              </div>
              
            </div>)
            }
          </div>
        </div>
      </div>
    </>
  );
}
