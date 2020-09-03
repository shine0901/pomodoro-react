import React from 'react';

const TimeLeft = (props) => {
  const minutes = Math.floor(props.duration / 60);
  const seconds = props.duration % 60;
  return (
    <div className="TimeLeft">
      <h2>{props.process}</h2>
      <h2>
        {minutes >= 10 ? minutes : `0${minutes}`}:
        {seconds >= 10 ? seconds : `0${seconds}`}
      </h2>
    </div>
  );
};

export default TimeLeft;
