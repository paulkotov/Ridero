import * as types from '../constants/ActionTypes';

export const addBook = (author, title, link) => ({ type: types.ADD_BOOK, author, title, link });
export const deleteBook = id => ({ type: types.DELETE_BOOK, id });
export const editBook = (id, author, title) => ({ type: types.EDIT_BOOK, id, author, title });
