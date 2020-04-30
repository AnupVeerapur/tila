// import { delay } from "redux-saga";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from "./action";

let headers = {
    'Content-Type': 'application/json'
};

export async function get(url) {
    return new Promise(function (resolve, reject) {
        try {
            const options = {
                method: 'GET',
                headers: headers,
            };
            fetch(url, options)
                .then(res => {
                    if (200 === res.status) {
                        return res.json();
                    } else {
                        const error = { response: res };
                        console.log("Error");
                    }
                })
                .then(res => {
                    resolve(res);
                });

        } catch (error) {
            console.log("Error");
        }
    });
}

const fetchListData = async () =>
    await get("http://www.mocky.io/v2/5e86ec5531000011d8814754");



function* onFetchItem() {
    console.log("Inside sAga")
    let errMsg = "Error in fetching data."
    try {
        const apiResult = yield call(fetchListData);//Saga is suspended until the Promise returned by call
        if (apiResult !== undefined) {
            console.log("Inside sAga On Fethc Item 1 ", apiResult)
            yield put(actions.onFetchItemSuccess(apiResult));//which instructs the middleware to dispatch a action

        }
    }
    catch (err) {
        yield put(actions.onFetchItemError(errMsg));
    }
}

function* onAddItem(payload) {
    console.log("Inside sAga On add Item", payload);
    let delArr = payload.payload.arr;
    let xind = delArr.indexOf(payload.payload.value);
    delArr.splice(xind, 1);
    yield put(actions.onAddItemSuccess(delArr));
}

function* onDeleteItem(payload) {
    console.log("Inside sAga On delete Item")
    yield put(actions.onDeleteItemSuccess(payload));
}



export default function* rootSaga() {
    yield takeEvery("FETCH_ITEM", onFetchItem);
    yield takeEvery("ON_ADD_ITEM", onAddItem);
    yield takeEvery("ON_DELETE_ITEM", onDeleteItem);
}