import React from 'react'

export default function Planet( {planets} ) {
  return (
  <div>

   {planets.map((planet, index) => (
<div key={index} className='flex'>

<div className='block-1' style={{backgroundColor: 'red'}}>
  <img src={planet.images.planet} alt={planet.name} />
</div>
<div>
<div className='block-2' style={{backgroundColor: 'blue'}}>
  <h1>{planet.name}</h1>
  <p>{planet.overview.content}</p>
  <p>{planet.overview.source}</p>
</div>
<div className='block-3' style={{backgroundColor: 'green'}}>
  <p>OVERVIEW</p>
  <p>INTERNAL STRUCTURE</p>
  <p>SURFACE GEOLOGY</p>
</div>
</div>

      </div>
   ))}

</div> 
    
  )
}
