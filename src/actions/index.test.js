import * as types from '../constants/ActionTypes';
import * as actions from './index';
import { expect } from 'enzyme';

describe('book actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addBook('Author', 'Title')).toEqual({
      type: types.ADD_BOOK,
      author: 'Author',
      title: 'Title'
    });
  });

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actions.deleteBook(1)).toEqual({
      type: types.DELETE_BOOK,
      id: 1
    })
  })

  it('editTodo should create EDIT_TODO action', () => {
    expect(actions.editBook(1, 'Author', 'Title')).toEqual({
      type: types.EDIT_BOOK,
      id: 1,
      author: 'Author',
      title: 'Title'
    })
  })

})
