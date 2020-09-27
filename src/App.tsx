import React from 'react';
import logo from './logo.svg';
import './App.css';
import JobTitle from './JobTitle';
import BusinessCard from './BusinessCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div id="CardControls">
            <JobTitle />
          </div>
          <div>
            <BusinessCard />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
