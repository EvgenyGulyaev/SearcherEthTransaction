import React from 'react';
import { Row, Button, Input, Icon } from 'react-materialize';
import './style.css';
import axios from 'axios';
import Warning from '../Warning';

/**
 * Class for input with search eth wallet
 */
class RequestForm extends React.Component {
  /**
   * constructor component
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      api: "http://api.etherscan.io/api?module=account&action=txlist&address=",
      isBadRequest: false,
      cardsCount: '5'
    };
  };

  /**
   * Handle change
   * @param e
   * @returns {Promise<void>}
   */
  handleChange = (e) => {
    this.setState({ cardsCount: e.target.value }, this._getDataFromServer);
  };

  /**
   * Waiting Enter from our input
   * @param e
   * @returns {Promise<void>}
   * @private
   */
  _handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      this._getDataFromServer();
    }
  };

  /**
   * Get data from service and
   * if have data use method handleData and setState our data
   * else return Bad request
   * @param e
   * @returns {Promise<void>}
   * @private
   */
  _getDataFromServer = async () => {
    // @var@ for quantity transaction
    const { cardsCount } = this.state;
    try {
      if (this.refs['search'].state.value) {
        const response = await axios.get(`${this.state.api}${this.refs['search'].state.value}&sort=desc&apikey=YourApiKeyToken&offset=${cardsCount}&page=1`);
        if (response.data.result !== "Error! Invalid address format" && response.data.result.length) {
          this.props.handleData(response.data.result);
          this.setState({ isBadRequest: false })
          return
        }
        this.props.handleData([]);
        this.setState({ isBadRequest: true })
      }
    }
    catch (e) {
      console.log('e', e)
    }
  };

  render() {
    const { isBadRequest, cardsCount } = this.state;
    return (
      <div className={"request-form-center"}>
        <Row>
          <Input autoFocus l={8} m={8} s={8} ref="search" label="Ethereum Account" validate
                 onKeyPress={this._handleKeyPress}><Icon>search</Icon></Input>


          <Input onChange={this.handleChange} l={2} m={2} s={2} ref="quantity" type="select"
                 defaultValue={cardsCount}>
            <option value="5">5 Cards</option>
            <option value="10">10 Cards</option>
            <option value="15">15 Cards</option>
          </Input>


          <Button className={"request-form-margin-btn"}
                  onClick={this._getDataFromServer}
                  l={2}
                  m={2}
                  s={2}
                  waves="light"
                  node="a"> <Icon>search</Icon></Button>
        </Row>
        {isBadRequest ? <Warning/> : null}
      </div>
    );
  }

}

export default RequestForm
