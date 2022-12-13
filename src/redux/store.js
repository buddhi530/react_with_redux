import { combineReducers, createStore,applyMiddleware,compose  } from "redux";
import fruitsReducer from "./fruits/fruitsReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import albumReducer from "./album/albumReducer";

const rootReducer = combineReducers({
    fruits:fruitsReducer,
    album: albumReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk,logger)));

export default store;