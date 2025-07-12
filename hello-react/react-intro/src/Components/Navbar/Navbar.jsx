import React from 'react';
import { FaWalking } from 'react-icons/fa';
import { FaChildReaching } from 'react-icons/fa6';
import { getGoingFromLocal, getVisitedFromLocal } from '../../Utils/setGoing';
import Country from '../Country/Country';

export default function Navbar() {
  const [goingCountries, setGoingCountries] = React.useState([]);
  const [visitedCountries, setVisitedCountries] = React.useState([]);
  React.useEffect(() => {
    const going = getGoingFromLocal();
    setGoingCountries(going);
  }, []);

  React.useEffect(() => {
    const visited = getVisitedFromLocal();
    setVisitedCountries(visited);
  }, []);

  return (
    <>
      <div className="navbar bg-transparent sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <h1 className="flex items-center justify-center text-5xl font-bold">
              Jad
              <span className="flex items-end justify-center gap-1 mt-3">
                <div className="w-7 h-7 bg-orange-500 border-6 border-black rounded-full"></div>
                <div className="w-7 h-7 bg-orange-500 border-6 border-black rounded-full"></div>
              </span>
            </h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <a>Destination</a>
            </li>
            <li>
              <a>Hotels</a>
            </li>
            <li>
              <a>Flights</a>
            </li>
            <li>
              <a>Booking</a>
            </li>

            <li>
              <a>Login</a>
            </li>
            <li>
              <a className="btn bg-transparent border-2 border-gray-500 rounded-lg py-5 px-10 text-orange-600 text-xl font-bold">
                Sign up
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <button
            className="btn bg-transparent border-2 border-gray-500"
            onClick={() => document.getElementById('going_modal').showModal()}
          >
            {<FaWalking />}
            {goingCountries.length}
          </button>

          {/* Modal  */}

          <dialog id="going_modal" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-2xl text-center">
                Going Countries
              </h3>
              {goingCountries.length > 0 ? (
                <ul className="list-disc pl-5">
                  {goingCountries.map((country, index) => (
                    <Country key={index} country={country} />
                  ))}
                </ul>
              ) : (
                <p className="py-4">No countries selected</p>
              )}
            </div>
          </dialog>

          <button
            className="btn bg-transparent border-2 border-gray-500"
            onClick={() => document.getElementById('visited_modal').showModal()}
          >
            {<FaChildReaching />}
            {visitedCountries.length}
          </button>

          {/* Visited Modal  */}

          <dialog id="visited_modal" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-2xl text-center">
                Visited Countries
              </h3>
              {visitedCountries.length > 0 ? (
                <ul className="list-disc pl-5">
                  {visitedCountries.map((country, index) => (
                    <Country key={index} country={country} />
                  ))}
                </ul>
              ) : (
                <p className="py-4">No countries selected</p>
              )}
            </div>
          </dialog>

          <div className="dropdown border-2 border-gray-500 rounded-lg">
            <button className="btn btn-ghost">
              EN{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <ul className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-20">
              <li>
                <a>EN</a>
              </li>
              <li>
                <a>FR</a>
              </li>
              <li>
                <a>ES</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
