import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-materialize';
import './style.css';

/**
 * Class for rendering cards with information
 */
const RequestCard = ({ blockHash, from, to, value }) => {
  return (
    <Col className={"card-padding"}>
      <Card className="teal lighten-1 white-text" textClassName="white-text" title="Transaction">
        <Row>
          <Col s={2} m={2} l={2}>
            <p>Block</p>
            <p>From</p>
            <p>To</p>
          </Col>
          <Col s={10} m={10} l={10}>
            <p className={"card-eth-wallet"}>{`${blockHash}`} </p>
            <p className={"card-eth-wallet"}>{`${from}`} </p>
            <p className={"card-eth-wallet"}>{`${to}`}</p>
          </Col>
        </Row>
        <Row className={"card-value-margin-btm"}>
          <Col s={2} m={2} l={2}>Value</Col>
          <Col s={10} m={10} l={10}>
            <p className={"card-text-right"}> {value / 1000000000000000000} ETH</p>
          </Col>
        </Row>
      </Card>
    </Col>
  );

}

RequestCard.propTypes = {
  blockHash: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  value: PropTypes.string,
}

RequestCard.defaultProps = {
  blockHash: '',
  from: '',
  to: '',
  value: '',
}

export default RequestCard
