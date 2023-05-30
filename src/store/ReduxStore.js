import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../Reducers";

const saveToLocalStorage = (store) => {
    try {
        const serializedStore = JSON.stringify(store)
        window.localStorage.setItem('store', serializedStore)
    } catch (e) {
        console.log(e)
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedStore = window.localStorage.getItem('store')
        if (serializedStore === null) return undefined;
        return JSON.parse(serializedStore)
    } catch (e) {
        console.log(e)
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const presistedState = loadFromLocalStorage();

const store = createStore(reducer, presistedState, composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store