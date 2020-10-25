import { CLEAR_PAST_TRANSACTION_COUNT } from '../constants';

export const clearPastTransactionCount = () => (dispatch) => {
  dispatch({ type: CLEAR_PAST_TRANSACTION_COUNT });
};
