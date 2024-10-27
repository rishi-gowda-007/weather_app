import React from 'react';
import './search_bar.css'
import { useState } from 'react';
function Search_bar({setResult}) {
  const [City,setCity]=useState();
  const getData=async(city)=>{
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
  const options = {
	    method: 'GET',
	    headers: {
		              'x-rapidapi-key': '833e0bc70amsh6783c149319163fp12cadcjsna3fc922c6267',
		              'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	    }
  };

  try 
  {
	  const response = await fetch(url, options);
	  const result = await response.json();
    setResult(result);
	  console.log(result);
  } 
  catch (error) 
  {
	  console.error(error);
  }
}
  return (
    <div id='search_bar_main'>
        <div id='search_bar_combo'>
            <input type='Text' placeholder='Search city' id="search_bar_input" value={City} onChange={(e)=>setCity(e.target.value)}></input>
            <button id="search_bar_button" onClick={()=>getData(City)}>Search</button>
        </div>
    </div>
  )
}

export default Search_bar;