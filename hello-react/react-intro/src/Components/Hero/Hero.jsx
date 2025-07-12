import React from 'react';
import HeroImage from '../../assets/Traveller 1.png';

export default function Hero() {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={HeroImage} className="" />
          <div>
            <h4>Best Destinations around the world</h4>
            <h1 className="text-5xl font-bold">
              Travel, enjoy and live a new and full life
            </h1>
            <p className="py-6">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div>
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-outline btn-secondary ml-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
