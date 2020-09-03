import React from 'react';
import '../styles/TimeControls.css';

const TimeControls = (props) => {
  return (
    <div className="TimeControls">
      <button onClick={props.startPauseTimer}>
        {props.isRun
          ? <svg viewBox="0 0 100 100">
              <rect x="25" y="25" width="15" height="50"/>
              <rect x="60" y="25" width="15" height="50"/>
            </svg>
          : <svg viewBox="0 0 100 100">
              <path d="M 30 20 L 80 50 L 30 80Z"/>
            </svg>
        }
      </button>
      <button onClick={props.resetTimer}>
        <svg viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50"/>
        </svg>
      </button>
    </div>
  );
}

export default TimeControls;
