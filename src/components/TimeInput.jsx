import React from 'react';

const TimeInput = (props) => {
  return (
    <div className="TimeInput">
      <label>{props.label}</label>
      <div>
        <button onClick={props.increment}>+</button>
        <h2>{props.value}</h2>
        <button onClick={props.decrement}>-</button>
      </div>
    </div>
  );
}

export default TimeInput;
