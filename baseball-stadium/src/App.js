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
      if(this.state.strikes > 2) {
        this.setState({
          strikes: 0
        })
      } else {
        this.setState({
          strikes: this.state.strikes + 1
        })
      } 
    }

    handleBall = () => {
      if(this.state.balls > 3) {
        this.setState({
          balls: 0
        })
      } else {
        this.setState({
          balls: this.state.balls + 1
        })
      } 
    }

    handleFoul = () => {
      if (this.state.strikes < 2) {
        this.setState({
          strikes: this.state.strikes + 1
        })
      }
    }

    handleHit = () => {
      this.setState({
        strikes: 0,
        balls: 0
      })
    }

  render() {
    return (
      <div className="App">
        <Display score={this.state} />
        <Dashboard 
          handleStrike={this.handleStrike} 
          handleBall={this.handleBall} 
          handleFoul={this.handleFoul}
          handleHit={this.handleHit}
        />
      </div>
    )
  }
}

export default App;
