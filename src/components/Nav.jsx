import React from 'react';
//import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import style from './Nav.module.css';
import {useState} from 'react'
import About from './About'
 

function Nav({onSearch}) { //onSearch= significa que le das un atributo con el valor {onSearch}
  const [about, setAbout]= useState(false)

  function show(){
    setAbout(!about)
  }

  return (
    <div className= {style.nav}>
      <h2 className={style.name}>Weather App</h2>
      <SearchBar onSearch={onSearch}/>  
      <div className={style.aboutMe}>
        <button onClick={show}>Not done yet</button>
        {
          about ? 
          <About/>
                :
          <div/>
        }
      </div>
    </div>
  );
};

export default Nav;
