import React from "react";
import axios from "axios";
import logo from "./Moon Memo.png";
import "./App.css";

export default class PhaseList extends React.Component {
  state = {
    phases: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New Zealand?unitGroup=us&key=5HLAMT6C2LQHXCZDZMH7X69WA&include=days&elements=datetime,moonphase`
      )
      .then((res) => {
        const phases = res.data.days;
        this.setState({ phases });
      });
  }

  render() {
    return (
      <div>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ul>
          {this.state.phases.map((phase) => (
            <p key={phase.datetime}>{phase.moonphase}</p>
          ))}
        </ul>
      </div>
    );
  }
}
