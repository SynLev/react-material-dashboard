import axios from 'axios';
import { web3 } from '../../utils/web3Util';

import { GET_DAILY_TRANSACTION_COUNT_START, GET_DAILY_TRANSACTION_COUNT_SUCCESS, GET_DAILY_TRANSACTION_COUNT_FAIL } from '../constants';

export const getDailyTransactionCount = (ethAddress, blockStart) => (dispatch) => {
  dispatch({ type: GET_DAILY_TRANSACTION_COUNT_START, payload: blockStart });
  const reqBody = {
    jsonrpc: '2.0',
    method: 'eth_getTransactionCount',
    params: [
      '0x32ddce59f1ebe24922855308e6b2f46c6e7f0493',
      '0x95abd7'
    ],
    id: 1
  };
  axios.post(`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`, reqBody)
    .then((res) => {
      console.log(blockStart);
      const numberTxCount = web3.utils.hexToNumber(res.data.result);
      dispatch({ type: GET_DAILY_TRANSACTION_COUNT_SUCCESS, payload: numberTxCount });
    })
    .catch((err) => {
      dispatch({ type: GET_DAILY_TRANSACTION_COUNT_FAIL, payload: err });
    });
};
