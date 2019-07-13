import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import RequestCard from '../Card';

/**
 * Class for rendering cards with information
 */
const RequestCards = ({ data }) => (
  <div className={"cards"}>
    {
      data.length ? data.map(el =>
        <RequestCard
          blockHash={el.blockHash}
          from={el.from}
          to={el.to}
          key={el.blockHash}
          value={el.value}
        />) : null
    }
  </div>
);

RequestCards.propTypes = {
  data: PropTypes.array,
}

RequestCards.defaultProps = {
  data: []
}

export default RequestCards
