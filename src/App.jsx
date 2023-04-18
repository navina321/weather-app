import React from 'react';

import Header from './components/Header/Header'
import './App.scss';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Todo from './containers/Todo/Todo';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <CurrentWeather/>
      <Todo/>
    </div>
  );
}

export default App;