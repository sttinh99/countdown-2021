import React, { Component } from "react";

import TimeContext from "../contextAPI/TimeContext";
const NewYears = new Date("1 Jan 2021");

export default class extends Component {
  constructor(props) {
    super();
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      const CurrentDay = new Date();
      this.setState({
        days: Math.floor((NewYears - CurrentDay) / (1000 * 24 * 3600)),
        hours: Math.floor((NewYears - CurrentDay) / (1000 * 3600)) % 24,
        minutes: Math.floor((NewYears - CurrentDay) / (1000 * 60)) % 60,
        seconds: Math.floor((NewYears - CurrentDay) / 1000) % 60,
      });
    }, 1000);
  }
  render() {
    return (
      <TimeContext.Provider
        value={{
          days: this.state.days,
          hours: this.state.hours,
          minutes: this.state.minutes,
          seconds: this.state.seconds,
        }}
      >
        {this.props.children}
      </TimeContext.Provider>
    );
  }
}
