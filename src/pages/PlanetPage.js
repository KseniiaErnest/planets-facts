import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function PlanetPage( {planets} ) {
  const { name } = useParams();
  const planet = planets.find((planet) => planet.name === name);
  return (
    <main>
     <div className='flex'>

<div className='img-box'>
  <img src={planet.images.planet} alt={planet.name} />
</div>

<div className='container-about-planet'>
<div >
  <h1 className='planet-name'>{planet.name}</h1>
  <p className='planet-description'>{planet.overview.content}</p>
  <p><span className='span'>Source :</span> <Link className='planet-wiki-link' to={planet.overview.source}>Wikipedia</Link></p>
</div>
<div className='buttons-box' >
  <button>
  <span>01</span>OVERVIEW
  </button>
  <button><span>02</span>INTERNAL STRUCTURE</button>
  <button><span>03</span>SURFACE GEOLOGY</button>
</div>
</div>

      </div>


      <div className='container-planet-facts'>
<div>
  <p>ROTATION TIME</p>
  <h3>{planet.rotation}</h3>
</div>
<div>
  <p>REVOLUTION TIME</p>
  <h3>{planet.revolution}</h3>
</div>
<div>
  <p>RADIUS</p>
  <h3>{planet.radius}</h3>
</div>
<div>
  <p>AVERAGE TEMP.</p>
  <h3>{planet.temperature}</h3>
</div>

      </div>
     
    </main>

  
  )
}
