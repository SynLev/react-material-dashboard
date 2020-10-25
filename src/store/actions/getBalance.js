import axios from 'axios';
import { GET_BALANCE_START, GET_BALANCE_SUCCESS, GET_BALANCE_FAIL } from '../constants';

export const getBalance = (ethAddress) => (dispatch) => {
  dispatch({ type: GET_BALANCE_START, payload: ethAddress });
  const reqBody = {
    jsonrpc: '2.0',
    method: 'eth_getBalance',
    params: [
      ethAddress,
      'latest'
    ],
    id: 1
  };
  axios.post(`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`, reqBody)
    .then((res) => {
      const decimalBalance = parseInt(res.data.result) / 1000000000000000000;
      dispatch({ type: GET_BALANCE_SUCCESS, payload: decimalBalance });
    })
    .catch((err) => {
      dispatch({ type: GET_BALANCE_FAIL, payload: err });
    });
};
