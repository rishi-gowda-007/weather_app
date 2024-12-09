import React from 'react';
import './Weather_result.css';

const Weather_result = ({ result }) => {
  const h1s = { fontSize: "2.5vw",
                marginLeft:"10vw",
   };
//   let style_div = {};

//   if (result) {
//       style_div = {
//           backgroundImage: `url(${result.current.condition.icon})`,
//           marginLeft: '10vw',
//           height: '4vw', 
//           width: '4vw',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//       };
//   }

  return (
      <div>
          {result ? (
              <div id="Weather_result_main">
                  {/* <div id='w_icon' style={style_div}></div> */}
                  <p className='Weather_text'>{result.weather[0].main}</p>
                  <h2 className='Weather_text'>{result.name},{result.sys.country}</h2>
                  <b style={h1s}>Temperature  - {result.main.temp}<sup>o</sup>F</b>
                  <b className='Weather_text'>Wind Speed - {result.wind.speed}, Humidity - {result.main.humidity}</b>
              </div>
          ) : (
              <div id="Weather_result_main">
                  <p className='Weather_text'>Time</p>
                  <h2 className='Weather_text'>Location</h2>
                  <b className='Weather_text' style={h1s}>Temperature</b>
                  <b className='Weather_text'>Wind Speed, Humidity</b>
              </div>
          )}
      </div>
  );
};


export default Weather_result;
