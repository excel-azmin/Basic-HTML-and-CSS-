import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

export default function Navbar() {
  const userInfo = useContext(AuthContext);
  console.log('User Info:', userInfo);

  return (
    <>
      <div className=" bg-base-300 py-5">
        <div className="lg:max-w-11/12 mx-auto navbar  shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Pankha Auth</a>
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
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
