import React from 'react';

const TimeControls = (props) => {
  return (
    <div className="TimeControls">
      <button onClick={props.startPauseTimer}>{props.isRun ? 'Pause' : 'Play'}</button>
      <button onClick={props.resetTimer}>Reset</button>
    </div>
  );
}

export default TimeControls;
