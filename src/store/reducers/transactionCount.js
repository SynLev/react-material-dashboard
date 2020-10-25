import { GET_DAILY_TRANSACTION_COUNT_START, GET_DAILY_TRANSACTION_COUNT_SUCCESS, GET_DAILY_TRANSACTION_COUNT_FAIL } from '../constants';

const initialState = {
  loading: false,
  blockStart: null,
  transactionCount: null,
  errorMessage: null,
};

export const transactionCount = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAILY_TRANSACTION_COUNT_START:
      return {
        ...state,
        blockStart: action.payload,
        loading: true,
      };
    case GET_DAILY_TRANSACTION_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        transactionCount: action.payload,
      };
    case GET_DAILY_TRANSACTION_COUNT_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
