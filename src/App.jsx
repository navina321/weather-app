import React from 'react';
import { useEffect, useState } from 'react';

import Header from './components/Header/Header'
import './App.scss';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
  // const [weatherData, setWeatherData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //       const API_KEY = '1c270875fa2a452188354414231804';
  //       const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`;

  //       fetch(API_URL)
  //         .then(response => response.json())
  //         .then(data => {
  //           setWeatherData(data);
  //           setLoading(false);
  //           const currentHour = new Date().getHours();
  //           setMessage(getMessage(currentHour));
  //         })
  //         .catch(error => {
  //           console.log(error);
  //           setLoading(false);
  //           setMessage('Unable to fetch weather data.');
  //         });
  //     }, (error) => {
  //       console.log(error);
  //       setLoading(false);
  //       setMessage('Unable to fetch location data.');
  //     });
  //   } else {
  //     setLoading(false);
  //     setMessage('Geolocation is not supported by this browser.');
  //   }
  // }, []);

  // function getMessage(hour) {
  //   if (hour >= 0 && hour < 12) {
  //     return 'Good Morning!';
  //   } else if (hour >= 12 && hour < 18) {
  //     return 'Good Afternoon!';
  //   } else {
  //     return 'Good Evening!';
  //   }
  // }

  return (
    <div className="App">
      <Header/>
      {/* {loading && <p className='loading'>Loading...</p>}
      {weatherData && (
        <>
          <p className='greeting'>{message}</p>
          <p className='location'>Location: {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</p>
          <p className='temp'>Temperature: {weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</p>
          <p className='cond'>Condition: {weatherData.current.condition.text}</p>
        </>
      )}
      {!loading && !weatherData && <p className='greeting'>{message}</p>} */}
      <CurrentWeather/>
    </div>
  );
}

export default App;