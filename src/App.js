import React from "react";
import axios from "axios";

import "./App.css";

export default class PhaseList extends React.Component {
  state = {
    phases: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New Zealand/last7days?unitGroup=metric&key=5HLAMT6C2LQHXCZDZMH7X69WA&include=days&elements=datetime,moonphase`
      )
      .then((res) => {
        const phases = res.data.days;
        this.setState({ phases });
        console.log(phases);
      });
  }

  render() {
    return (
      <div className="App-phases">
        <ul>
          {this.state.phases.map((phase) => (
            <p key={phase.datetime}>{phase.moonphase}</p>
          ))}
        </ul>
      </div>
    );
  }
}
