import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import createSagaMiddleware from 'redux-saga';

export const history = createHistory();

export const sagaMiddleware = createSagaMiddleware();

const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(middleware, sagaMiddleware),
            DevTools.instrument()
        )
    );
}
