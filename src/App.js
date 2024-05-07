import { useState } from 'react';
import NavBar from './components/NavBar';
import PlanetPage from './pages/PlanetPage';
import Planet from './components/Planet';
import planetData from './data.json';
import {  Routes, Route } from 'react-router-dom';

function App() {
  const [planets, setPlanets] = useState(planetData);


  return (
  
  <>
  <NavBar planets={planets} />
  <Routes>
<Route path='/planet/:name' element={ <PlanetPage planets={planets} ></PlanetPage>} />
    </Routes>
    </>
  );
}

export default App;
