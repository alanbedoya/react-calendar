import React from 'react';
import Calendar from './components/Calendar';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react <b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
  );
}

export default App;
