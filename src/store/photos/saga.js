import axios from "../../axiosInstance";
import { put, call, select } from "redux-saga/effects";

import { fetchPhotosSuccess, fetchPhotosFailure } from "./actions";

const getTags = state => state.photosReducer.tags;

export function* getPhotosSaga() {
  const tags = yield select(getTags);
  let response = yield call(
    axios.get,
    `?key=15222162-80f11fbf748cd9bfec3f11d63&q=${tags.join(
      "+"
    )}&image_type=photo&per_page=40`
  );

  if (response.status === 200) {
    yield put(fetchPhotosSuccess(response.data.hits));
  } else {
    yield put(fetchPhotosFailure("error"));
  }
}
