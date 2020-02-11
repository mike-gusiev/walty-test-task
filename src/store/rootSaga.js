import { takeEvery } from "redux-saga/effects";

import { getPhotosSaga } from "./photos/saga";
import * as types from "./photos/types";

export function* watchPhotos() {
  yield takeEvery(types.FETCH_PHOTOS_REQUEST, getPhotosSaga);
}
