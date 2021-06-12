import React from 'react';
import style from './Card.module.css';
import {Link} from 'react-router-dom'

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <Link to={`/ciudad/${id}`} className={style.link}>
        <div className={style.whole}>
          <div className={style.ciudad}>
            {name}
          <button className={style.button} onClick= {(id) => onClose}>X</button>
          </div>
          <div className={style.content}>
            <div className={style.temp}>
              <p className={style.min}>MIN: {min}°</p>
              <p className={style.max}>MAX: {max}°</p>
            </div>
            <img className={style.img} src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt= "current climate img"/>
          </div>
        </div>  
      </Link>
    
    );
};
