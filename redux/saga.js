// import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';



function* onFetchItem() {
    console.log("Inside sAga")
}


export default function* rootSaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
    yield takeEvery("FETCH_ITEM", onFetchItem);
}