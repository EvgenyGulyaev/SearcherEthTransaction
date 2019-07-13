import React, { Component } from 'react';
import RequestForm from "./components/RequestForm/index";
import RequestCards from "./components/RequestCards";
import './App.css';

class App extends Component {
  state = {
    data: []
  };

  handleData = (data) => {
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <RequestForm handleData={this.handleData}/>
        <RequestCards data={data}/>
      </div>

    );
  }
}

export default App;
