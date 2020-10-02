import React from 'react';
import logo from './logo.svg';
import './App.css';
import JobTitle from './JobTitle';
import BusinessCard from './BusinessCard';
import Name from './Name';
import Address from './Address';

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
            <div>
              <Address />
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
