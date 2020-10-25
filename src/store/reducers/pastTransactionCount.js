import { CLEAR_PAST_TRANSACTION_COUNT, GET_PAST_TRANSACTION_COUNT_START, GET_PAST_TRANSACTION_COUNT_SUCCESS } from '../constants';

const initialState = {
  loading: false,
  pastTransactionArray: [],
};

export const pastTransactionCount = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAST_TRANSACTION_COUNT_START:
      return {
        ...state,
        loading: true,
      };
    case GET_PAST_TRANSACTION_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        pastTransactionArray: action.payload,
      };
    case CLEAR_PAST_TRANSACTION_COUNT:
      return {
        ...state,
        pastTransactionArray: action.payload,
      };
    default:
      return state;
  }
};
