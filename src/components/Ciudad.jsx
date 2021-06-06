import React from 'react';
import {Link} from 'react-router-dom'
import style from './Ciudad.module.css'

export default function Ciudad({city}) {
    if (city){
        return (
            <div className={style.ciudad}>
                    <div className={style.container}>
                        <div className={style.close}>
                            <Link to='/'>
                                <button>X</button>
                            </Link>
                        </div>
                        <div className={style.info}>
                            <h1>{city.name}</h1>
                            <div>Temperature: <h3>{city.temp} ºC</h3></div>
                            <div>Weather: <h3>{city.weather}</h3></div>
                            <div>Wind: <h3>{city.wind} km/h</h3></div>
                            <div>Clouds: <h3>{city.clouds}</h3></div>
                            <div>Latitud: <h3>{city.latitud}º</h3></div>
                            <div>Longitud: <h3>{city.longitud}º</h3></div>
                        </div>
                </div>
            </div>
        )
    }
    else {return <h3></h3>}
    
}