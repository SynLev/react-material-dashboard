import axios from 'axios';
import { GET_CURRENT_BLOCK_START, GET_CURRENT_BLOCK_SUCCESS, GET_CURRENT_BLOCK_FAIL } from '../constants';

export const getCurrentBlock = () => (dispatch) => {
  dispatch({ type: GET_CURRENT_BLOCK_START });
  const reqBody = {
    jsonrpc: '2.0',
    method: 'eth_blockNumber',
    params: [],
    id: 1
  };
  axios.post(`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`, reqBody)
    .then((res) => {
      const currentBlock = parseInt(res.data.result);
      dispatch({ type: GET_CURRENT_BLOCK_SUCCESS, payload: currentBlock });
    })
    .catch((err) => {
      dispatch({ type: GET_CURRENT_BLOCK_FAIL, payload: err });
    });
};
