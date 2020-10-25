import { GET_BALANCE_START, GET_BALANCE_SUCCESS, GET_BALANCE_FAIL } from '../constants';

const initialState = {
  loading: false,
  address: null,
  balance: null,
  fixedBalance: null,
  errorMessage: null,
};

export const ethBalance = (state = initialState, action) => {
  switch (action.type) {
    case GET_BALANCE_START:
      return {
        ...state,
        loading: true,
        address: action.payload,
      };
    case GET_BALANCE_SUCCESS:
      return {
        ...state,
        loading: false,
        balance: action.payload,
        fixedBalance: action.payload.toFixed(3)
      };
    case GET_BALANCE_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
