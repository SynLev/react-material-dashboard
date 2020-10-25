import axios from 'axios';
import { GET_PAST_BALANCES_START, GET_PAST_BALANCES_SUCCESS, GET_PAST_BALANCES_FAIL } from '../constants';

export const getPastBalances = (ethAddress, blockIndex) => (dispatch) => {
  dispatch({ type: GET_PAST_BALANCES_START });
  const reqBody = {
    jsonrpc: '2.0',
    method: 'eth_getBalance',
    params: [
      ethAddress,
      blockIndex
    ],
    id: 1
  };
  axios.post(`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`, reqBody)
    .then((res) => {
      const decimalBalance = parseInt(res.data.result) / 1000000000000000000;
      dispatch({ type: GET_PAST_BALANCES_SUCCESS, payload: decimalBalance });
    })
    .catch((err) => {
      dispatch({ type: GET_PAST_BALANCES_FAIL, payload: err });
    });
};
