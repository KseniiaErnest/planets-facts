import { useState } from 'react';
import NavBar from './components/NavBar';
import planetData from './data.json';

function App() {
  const [planets, setPlanets] = useState(planetData);


  return (
  <>
  <NavBar planets={planets} />

    <main>

    </main>

    <footer>

    </footer>
  </>
  );
}

export default App;
