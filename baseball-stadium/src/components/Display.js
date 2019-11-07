import React from 'react'

function Display(props) {
  return (
    <div>
      <h3>Strikes: {props.score.strikes}</h3>
      <h3>Balls: {props.score.balls}</h3>
    </div>
  );
}

export default Display;