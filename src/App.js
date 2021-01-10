import React from "react";
import "./App.css";
import festival from "./images/festival.svg";
import fireworks from "./images/fireworks.svg";
import soundsClock from "./sounds/clock.mp3";

import TimeProvider from "./components/TimeProvider";
import TimeContext from "./contextAPI/TimeContext";

function App() {
  return (
    <TimeProvider>
      <div className="App">
        <h1>
          New Year 2022
          <img src={fireworks} alt="fireworks" width="30px" height="30px" />
          <img src={festival} alt="festival" width="30px" height="30px" />
        </h1>

        <TimeContext.Consumer>
          {(times) => (
            <div className="format-countdown">
              <audio autoPlay loop>
                <source src={soundsClock}></source>
              </audio>
              <h1>
                {times.days}
                <span> days</span>
              </h1>
              <h1>
                {times.hours}
                <span> hours</span>
              </h1>
              <h1>
                {times.minutes}
                <span> minutes</span>
              </h1>
              <h1>
                {times.seconds}
                <span> seconds</span>
              </h1>
            </div>
          )}
        </TimeContext.Consumer>
      </div>
      <span>by: sttinh99</span>
    </TimeProvider>
  );
}
export default App;
