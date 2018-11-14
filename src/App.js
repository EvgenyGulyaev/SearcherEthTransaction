import React, {Component} from 'react';
import {RequestForm} from "./components/RequestForm/index";
import {RequestCard} from "./components/RequestCard";
import './App.css';
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
		this.handleData = this.handleData.bind(this);
	};

	handleData (data)  {
		this.setState({data: data});
	};

	render() {
		return (
			<div className="App">
				<RequestForm handleData={this.handleData.bind(this)}/>
				<RequestCard data={this.state.data}/>
			</div>

		);
	}
}

export default App;
