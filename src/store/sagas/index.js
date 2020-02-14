import api from "../../services/api";
import { call, all, put, takeLatest } from "redux-saga/effects";

function loadUserApi(slug) {
  return api.get(`/users/index/${slug}`);
}

function* loadUserSaga(action) {
  let response = yield call(loadUserApi, action.slug);
  yield put({
    type: "LOAD_USER",
    response
  });
}

export default function* rootSaga() {
  return yield all([yield takeLatest("ASYNC_LOAD_USER", loadUserSaga)]);
}
