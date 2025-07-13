import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import HeaderImage from '../../assets/Decore.png';

export default function Header({ goingCountries, visitedCountries }) {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-screen-xl mx-auto bg-cover bg-center py-10">
          <Navbar
            goingCountries={goingCountries}
            visitedCountries={visitedCountries}
          />
          <Hero />
        </div>
      </div>
    </>
  );
}
