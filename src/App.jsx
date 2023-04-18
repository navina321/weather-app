import React from 'react';

import Header from './components/Header/Header'
import './App.scss';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <CurrentWeather/>
    </div>
  );
}

export default App;