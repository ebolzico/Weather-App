import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import {Route} from 'react-router-dom';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx';
import swal from 'sweetalert' 
import dotenv from 'dotenv'
dotenv.config()


export default function App() {
  const [cities, setCities] = useState([]);
   
  function onSearch(ciudad) {
    let check= cities.filter(i => i.name === ciudad)
    if (check[0]){
      return swal({
        title: 'Error!',
        text: 'The city you searched is already listed'
    })}
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          swal({
            title: 'Error!',
            text: ciudad + ' was not found. Check your spelling just in case',
            icons: 'error',
            padding: "0.75rem"
          });
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch}/>} 
      />
      <Route
        exact path='/about'
        component={About}
      />  
      <Route
        exact path='/'
        render={() => <Cards onClose={onClose} cities={cities}/>}
      />
      <Route
        exact path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
    </div>
  );
}
