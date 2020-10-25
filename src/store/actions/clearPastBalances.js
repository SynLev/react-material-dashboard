import { CLEAR_PAST_BALANCES } from '../constants';

export const clearPastBalances = () => (dispatch) => {
  const emptyArr = [];
  dispatch({ type: CLEAR_PAST_BALANCES, payload: emptyArr });
};
