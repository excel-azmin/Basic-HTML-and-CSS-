import { Link } from 'react-router';
import Profile from '../assets/user.png';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <div></div>
      <div className="flex gap-4 ">
        <Link
          className="hover:underline hover:text-[#D72050] transition-colors duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          className="hover:underline hover:text-[#D72050] transition-colors duration-300"
          to="/about"
        >
          About
        </Link>
        <Link
          className="hover:underline hover:text-[#D72050] transition-colors duration-300"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="w-9 h-9 ">
          <img src={Profile} alt="Logo" />
        </div>
        <button className="btn border-none rounded-none bg-[#403F3F] text-white font-bold px-5">
          Login
        </button>
      </div>
    </div>
  );
}
