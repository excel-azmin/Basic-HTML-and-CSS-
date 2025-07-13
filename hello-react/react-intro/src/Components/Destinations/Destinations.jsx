import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import { setGoingToLocal, setVisitedToLocal } from '../../Utils/setGoing';

export default function Destinations({
  setGoingCountries,
  setVisitedCountries,
}) {
  const [destinations, setDestinations] = useState([]);
  // const [goingCountries, setGoingCountries] = useState([]);
  // const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/independent?status=true')
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data);
      })
      .catch((error) => console.error('Error fetching destinations:', error));
  }, []);

  const handleGoing = (country) => {
    setGoingCountries((prevGoing) => [...prevGoing, country]);
    setGoingToLocal(goingCountries);
  };
  const handleVisited = (country) => {
    setVisitedCountries((prevVisited) => [...prevVisited, country]);
    setVisitedToLocal(visitedCountries);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-center text-5xl font-bold">Top Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {destinations.map((destination, index) => {
            return (
              <Country
                key={index}
                country={destination}
                handleGoing={handleGoing}
                handleVisited={handleVisited}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
