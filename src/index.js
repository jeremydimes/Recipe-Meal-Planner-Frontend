import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <Calendar />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
