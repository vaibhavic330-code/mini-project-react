import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox(){
        let [city, setCity]=useState("");
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="c110e9565562519cd7b6ed7c2816a1d9";

    let getWeatherInfo = async () =>{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    
      let jsonResponse = await response.json();
    
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
         humidity: jsonResponse.main.humidity,
         feelsLike: jsonResponse.main.feelsLike,
         weather: jsonResponse.weather[0].description,
      };
      console.log(result);

    };




    let handleChange = (evt)=>{
        setCity(evt.target.value);
    };
    
    let handleSubmit =(evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };

    return(
    <div className='SearchBox'>
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
          <TextField id="city" label="city- name" variant="outlined" required value={city} onChange={handleChange}/>  
          <br></br><br></br>
           <Button variant="outlined" type="submit">search</Button>
        </form>
    </div>)
};