import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom'
import style from './searchBar.module.css'


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState(""); // >>>> Esto es un Hook!
  const history= useHistory()

  return ( 
    <form className={style.form} 
      onSubmit={(e) => {
        e.preventDefault(); // default: agregar=refresh, yo no quiero eso, por eso cuando le doy
        onSearch(city);     // agregar, que ejecute onSearch
        //setCity('')
        history.push('/')
      }}>
      <input
        className={style.input}
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={e => setCity(e.target.value)}// Modifica city cuando haya un cambio en el target
      />
      <input className={style.button} type="submit" value="Add" />
    </form>
          // este input, que tiene del tipo submit, cuando activa, hace una accion del tipo
  );      // "submit". Eso activa el onSubmit que esta arriba (que actua como un event listener)
}         // y hace todo el recorrido de la funcion
