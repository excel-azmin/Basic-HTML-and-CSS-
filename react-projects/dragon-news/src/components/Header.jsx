import moment from 'moment';
import Marquee from 'react-fast-marquee';
import Logo from '../assets/logo.png';

export default function Header() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1 pt-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 items-center justify-between ">
          <div className="col-span-1"></div>
          <div className="col-span-3 flex justify-center">
            <img src={Logo} alt="Logo" className="" />
          </div>
          <div className="col-span-1 flex items-center justify-end p-2 ">
            <label className="flex cursor-pointer gap-1 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="halloween"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
        <p className="text-md ">Journalism Without Fear or Favour</p>
        <p className="font-bold">{moment().format('LLLL')}</p>
      </div>

      <div className="bg-base-200 p-3 mt-10">
        <div className="flex gap-2 items-center justify-between">
          <p className="bg-[#D72050] p-2 px-5 font-bold text-white cursor-pointer">
            Latest
          </p>
          <Marquee>
            <p>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
            <p>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
          </Marquee>
        </div>
      </div>
    </>
  );
}
