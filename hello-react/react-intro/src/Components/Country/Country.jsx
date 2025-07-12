import { useState, useEffect } from 'react';
import { getGoingFromLocal, getVisitedFromLocal } from '../../Utils/setGoing';

export default function Country({ country, handleGoing, handleVisited }) {
  const { name, flags, continents } = country;

  const [going, setGoing] = useState(false);
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    const localGoing = getGoingFromLocal() || [];
    const localVisited = getVisitedFromLocal() || [];

    const isGoing = localGoing.find((c) => c.name.common === name.common);
    const isVisited = localVisited.find((c) => c.name.common === name.common);

    setGoing(!!isGoing);
    setVisited(!!isVisited);
  }, [name.common]);

  const handleGoingClick = () => {
    setGoing(!going);
    handleGoing(country);
  };

  const handleVisitedClick = () => {
    setVisited(!visited);
    handleVisited(country);
  };

  return (
    <div className="card bg-base-200 w-96 h-90 shadow-sm py-5">
      <figure>
        <img src={flags?.png} alt="flag" className="bg-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name?.common}
          <div className="badge badge-secondary">{continents[0]}</div>
        </h2>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {flags?.alt || 'No description available for this country.'}
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn badge badge-outline"
            style={{ backgroundColor: going ? 'green' : 'gray' }}
            onClick={handleGoingClick}
          >
            {going ? 'Going' : 'Not Going'}
          </button>
          <button
            className="btn badge badge-outline"
            style={{ backgroundColor: visited ? 'blue' : 'gray' }}
            onClick={handleVisitedClick}
          >
            {visited ? 'Visited' : 'Not Visited'}
          </button>
        </div>
      </div>
    </div>
  );
}
