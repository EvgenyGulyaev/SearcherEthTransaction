import React from 'react';
import './style.css';


/**
 * Class for Rendering bad request
 */
class RequestBad extends React.Component {
	/**
	 * constructor component
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			reason: "ETH wallet not found"
		};

	};


	render() {
		return (
			<div>
				<p className={"text-request"}>{this.state.reason}</p>
			</div>
		);
	}

}

export {RequestBad}
