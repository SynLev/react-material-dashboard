import {
  CLEAR_PAST_BALANCES, GET_PAST_BALANCES_START, GET_PAST_BALANCES_SUCCESS, GET_PAST_BALANCES_FAIL
} from '../constants';

const initialState = {
  loading: false,
  pastBalanceArray: [],
  errorMessage: null,
};

export const pastBalances = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAST_BALANCES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_PAST_BALANCES_SUCCESS:
      return {
        ...state,
        loading: false,
        pastBalanceArray: [...state.pastBalanceArray, action.payload],
      };
    case GET_PAST_BALANCES_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case CLEAR_PAST_BALANCES:
      return {
        ...state,
        pastBalanceArray: action.payload,
      };
    default:
      return state;
  }
};
