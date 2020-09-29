import React from 'react';
import logo from './logo.svg';
import './App.css';
import JobTitle from './JobTitle';
import BusinessCard from './BusinessCard';
import Name from './Name';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div id="CardControls">
            <div>
              <Name />
            </div>
            <div>
              <JobTitle />
            </div>
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
