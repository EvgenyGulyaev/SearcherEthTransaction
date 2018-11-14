import React from 'react';
import {Card, Col, Row} from 'react-materialize';
import './style.css';


/**
 * Class for rendering cards with information
 */
class RequestCard extends React.Component {
	/**
	 * constructor component
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		};

	};


	render() {
		// @var@ for rendering our cards if we have information
		let cards = this.props.data.length ? this.props.data.map((element, index) =>
				<Col  key={index} className={"card-padding"}>
					<Card className='teal lighten-1 white-text' textClassName='white-text' title="Transaction">
						<Row>
							<Col s={2} m={2} l={2}>
								<p>Block</p>
								<p>From</p>
								<p>To</p>
							</Col>


							<Col s={10} m={10} l={10}>
								<p className={"card-eth-wallet"}>{`${element.blockHash}`} </p>
								<p className={"card-eth-wallet"}>{`${element.from}`} </p>
								<p className={"card-eth-wallet"}>{`${element.to}`}</p>
							</Col>
						</Row>
						<Row className={"card-value-margin-btm"}>
							<Col s={2} m={2} l={2}>Value</Col>
							<Col s={10} m={10} l={10}>
								<p className={"card-text-right"}> {element.value/1000000000000000000} ETH</p>
							</Col>
						</Row>
					</Card>
				</Col>
			) :
			"";
		return (
			<div className={"cards"}>
				{cards}
			</div>
		);
	}

}

export {RequestCard}
