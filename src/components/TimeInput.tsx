import React from 'react';

const TimeInput: React.FC<Props> = ({ label, value, increment, decrement }) => {
  return (
    <div className="TimeInput">
      <label>{label}</label>
      <div>
        <button onClick={increment}>+</button>
        <h2>{value}</h2>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

type Props = {
  label: string;
  value: number;
  increment: () => void;
  decrement: () => void;
};

export default TimeInput;
