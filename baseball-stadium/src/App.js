import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
      hits: 0
    }
  }

    handleStrike = () => {

    }

    handleBall = () => {

    }

    handleFoul = () => {

    }

    handleHit = () => {

    }

  render() {
    return (
      <div className="App">
        <Display />
        <Dashboard />
      </div>
    )
  }
}

export default App;
