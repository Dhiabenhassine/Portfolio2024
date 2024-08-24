import React, { useState, useEffect } from "react";
import './Taskbar.css';
import wind from '../../assets/app/windows.png';
import explorer from '../../assets/app/explorer.png';
import edge from '../../assets/app/edge.png';

export default function Taskbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const formatDate = (date) => {
    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString([], options).replace(/^0/, "");
  };

  const formatTime = (time) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    return time.toLocaleTimeString([], options);
  };

  return (
    <div className="taskbar">
      <div className="taskbar-left"></div>
      <div className="taskbar-center">
        <div className="taskbar-icon">
          <img src={wind} alt="windows_logo" className="material-icons" />
        </div>
        <div className="taskbar-icon">
          <img src={explorer} alt="explorer_logo" className="material-icons" />
        </div>
        <div className="taskbar-icon">
          <img src={edge} alt="edge_logo" className="material-icons" />
        </div>
      </div>
      <div className="taskbar-right">
        <div className="material-icons rotate-180">expand_more</div>
        <div className="taskbar-icon">
          <div className="material-icons">wifi</div>
          <div className="material-icons">volume_up</div>
          <div className="material-icons rotate-180">battery_low</div>
        </div>
        <div className="taskbar-icon">
          <div className="date-time">
            <div>{formatTime(currentTime)}</div>
            <div>{formatDate(currentTime)}</div>
          </div>
          <div className="notifications material-icons">notifications</div>
        </div>
        <div className="group w-3 h-full flex justify-center items-center">
          <button className="hidden group-hover:block text-neutral-400 text-md h-full w-full pointer-events-none">|</button>
        </div>
      </div>
    </div>
  );
}
