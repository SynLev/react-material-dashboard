import axios from 'axios';
import { GET_PAST_TRANSACTION_COUNT_START, GET_PAST_TRANSACTION_COUNT_SUCCESS, GET_PAST_TRANSACTION_COUNT_FAIL } from '../constants';

export const getPastTransactionCount = (ethAddress, blockStart) => (dispatch) => {
  dispatch({ type: GET_PAST_TRANSACTION_COUNT_START });
  const reqBody = {
    ethAddress,
    blockStart
  };
  axios.post('https://us-central1-spool-5f770.cloudfunctions.net/getPastTransactions', reqBody)
    .then((res) => {
      dispatch({ type: GET_PAST_TRANSACTION_COUNT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PAST_TRANSACTION_COUNT_FAIL, payload: err });
    });
};
