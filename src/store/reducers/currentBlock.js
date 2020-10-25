import { GET_CURRENT_BLOCK_START, GET_CURRENT_BLOCK_SUCCESS, GET_CURRENT_BLOCK_FAIL } from '../constants';

const initialState = {
  loading: false,
  currentBlock: null,
  errorMessage: '',
};

export const currentBlock = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_BLOCK_START:
      return {
        ...state,
        loading: true,
      };
    case GET_CURRENT_BLOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        currentBlock: action.payload
      };
    case GET_CURRENT_BLOCK_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
