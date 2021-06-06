import React from 'react';
import style from './Cards.module.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities.length !== 0){       // En este if te dice que si recibe un valor en cities, que renderize todo, 
    return (        // else, que renderize otra cosa ("Sin ciudades")
      
      <div className={style.cards}>
        {cities.map(c => 
        <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
        /> )}
      </div>
    );
  } else {
    return(
      <div className={style.cards}>
        <h2>No cities added. Try to search for one</h2>
      </div>
    )
  }
}
