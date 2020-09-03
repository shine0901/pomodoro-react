import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TimeInput from './components/TimeInput';
import TimeControls from './components/TimeControls';
import TimeLeft from './components/TimeLeft';

const DEFAULT = {
  breakTime: 5,
  workingTime: 25
};

function App() {
  const audioElement = useRef(null);
  const [breakTime, setBreakTime] = useState(DEFAULT.breakTime);
  const [workingTime, setWorkingTime] = useState(DEFAULT.workingTime);
  const [duration, setDuration] = useState(DEFAULT.workingTime * 60);
  const [process, setProcess] = useState("Session");
  const [intervalId, setIntervalId] = useState(null);
  const isRun = intervalId !== null;

  useEffect(() => {
    setDuration(workingTime * 60);
  }, [workingTime]);

  useEffect(() => {
    if(duration === 0) {
      audioElement.current.play();
      if (process === 'Session') {
        setProcess('Break');
        setDuration(breakTime * 60);
      }
      else {
        setProcess('Session');
        setDuration(workingTime * 60);
      }
    }
  }, [duration, process, workingTime, breakTime]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const incrementWorking = () => {
    const temp = workingTime <= 59 ? workingTime + 1 : 60;
    setWorkingTime(temp);
  };
  const incrementBreak = () => {
    const temp = breakTime <= 59 ? breakTime + 1 : 60;
    setBreakTime(temp);
  };
  const decrementWorking = () => {
    const temp = workingTime - 1 || 1;
    setWorkingTime(temp);
  };
  const decrementBreak = () => {
    const temp = breakTime - 1 || 1;
    setBreakTime(temp);
  };

  const handleStartPauseTimer = () => {
    if (isRun) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setDuration(preDuration => preDuration - 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleResetTimer = () => {
    audioElement.current.load();
    clearInterval(intervalId);
    setIntervalId(null);
    setProcess('Session');
    setWorkingTime(DEFAULT.workingTime);
    setBreakTime(DEFAULT.breakTime);
    setDuration(DEFAULT.workingTime * 60);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 80) {
      alert('Play');
    } else if (e.keyCode === 82) {
      alert('Reset');
    } else {
      return;
    }
  }

  return (
    <div className="App">
      <TimeLeft
        process={process}
        duration={duration} />
      <TimeControls
        isRun={isRun}
        startPauseTimer={handleStartPauseTimer}
        resetTimer={handleResetTimer} />
      <TimeInput
        label="work"
        value={workingTime}
        increment={incrementWorking}
        decrement={decrementWorking} />
      <TimeInput
        label="break"
        value={breakTime}
        increment={incrementBreak}
        decrement={decrementBreak} />
      <audio ref={audioElement}>
        <source src="http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav" type="audio/wav"/>
      </audio>
    </div>
  );
}

export default App;
