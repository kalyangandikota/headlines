import * as types from '../actions/types';

const initialState = {
  loading: false,
  headlines: [],
  error: null,
}

export default function getNamesReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_HEADLINES_LOADING:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_HEADLINES_SUCCESS:
      return {
        ...state,
        loading: false,
        headlines: [...action.payload]
      };
    case types.FETCH_HEADLINES_ERROR:
      return {
        ...state,
        loading: false,
        headlines: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}