import * as types from "./types";

export const fetchPhotosRequest = tags => {
  return {
    type: types.FETCH_PHOTOS_REQUEST,
    payload: tags
  };
};

export const fetchPhotosSuccess = photos => {
  return {
    type: types.FETCH_PHOTOS_SUCCESS,
    payload: photos
  };
};

export const fetchPhotosFailure = error => {
  return {
    type: types.FETCH_PHOTOS_FAILURE,
    payload: error
  };
};
