import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga'

export const history = createHistory();

export const sagaMiddleware = createSagaMiddleware();

const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleware, sagaMiddleware),
    );
}
