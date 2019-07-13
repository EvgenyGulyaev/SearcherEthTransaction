import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Warning = ({ reason }) => <div><p className={"text-request"}>{reason}</p></div>

Warning.propTypes = {
  reason: PropTypes.string,
};

Warning.defaultProps = {
  reason: 'ETH wallet not found'
}

export default Warning;