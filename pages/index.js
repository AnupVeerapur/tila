import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';
import DemoPage from "../containers/demoPage";
import React from "react";
import reducer from "../redux/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/saga";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


export default function Page() {
    return (
        <Provider store={store}>
            {/* <Header /> */}
            {/* <Layout > */}
            <DemoPage />
            {/* </Layout> */}
        </Provider>
    )
}

