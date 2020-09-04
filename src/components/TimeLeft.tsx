import React from 'react';

const TimeLeft: React.FC<Props> = ({ duration, process }) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return (
    <div className="TimeLeft">
      <h2>{process}</h2>
      <h2>
        {minutes >= 10 ? minutes : `0${minutes}`}:
        {seconds >= 10 ? seconds : `0${seconds}`}
      </h2>
    </div>
  );
};

type Props = {
  duration: number;
  process: string;
};

export default TimeLeft;
