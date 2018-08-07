import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.UPDATE_FILTER:
            return action.filter;
        default:
            return state;
    }
};

const order = (state = true, action) => {
    switch (action.type) {
        case types.CHANGE_ORDER:
            return !state;
        default:
            return state;
    }
};

const column = (state = 'code', action) => {
    switch (action.type) {
        case types.SELECT_COLUMN:
            return action.column;
        default:
            return state;
    }
};

const db = (state = [], action) => {
    switch (action.type) {
        case types.POP:
            return [...state.slice(0, action.db), ...state.slice(action.db + 1)];
        case types.PUSH:
            return [...state, action.db];
        case types.INIT:
            return [...action.db];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    filter: filter,
    order: order,
    column: column,
    db: db,
    routing: routing
});

export default rootReducer;

