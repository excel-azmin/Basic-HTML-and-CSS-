import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Header from './Components/Header/Header';
import Destinations from './Components/Destinations/Destinations';

function App() {
  const [goingCountries, setGoingCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  return (
    <>
      <Header
        goingCountries={goingCountries}
        visitedCountries={visitedCountries}
      />
      <Destinations
        setGoingCountries={setGoingCountries}
        setVisitedCountries={setVisitedCountries}
      />
    </>
  );
}

export default App;
