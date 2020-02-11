import * as types from "./types";

const initialState = {
  photos: [],
  tags: [],
  lastSearches: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PHOTOS_REQUEST:
      let newSearches;
      if (state.lastSearches.length === 3) {
        newSearches = [...state.lastSearches, action.payload];
        newSearches.shift();
        debugger;
      } else {
        newSearches = [...state.lastSearches, action.payload];
      }
      return {
        ...state,
        loading: true,
        tags: action.payload,
        lastSearches: newSearches
      };
    case types.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: [...action.payload]
      };
    case types.FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
