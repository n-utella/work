import * as types from './types';

export const updateFilter = (filter) => ({
    type: types.UPDATE_FILTER,
    filter
});

export const changeOrder = () => ({
    type: types.CHANGE_ORDER
});

export const pop = (db) => ({
    type: types.POP,
    db
});

export const push = (db) => ({
    type: types.PUSH,
    db
});

export const selectColumn = (column) => ({
    type: types.SELECT_COLUMN,
    column
});

export const init = (db) => ({
    type: types.INIT,
    db
});

