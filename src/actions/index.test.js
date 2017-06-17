import * as types from '../constants/ActionTypes';
import * as actions from './index';
import { expect } from 'chai';

describe('book actions', () => {
  it('addBook should create ADD_BOOK action', () => {
    expect(actions.addBook('Author', 'Title', '')).to.deep.equal({
      type: types.ADD_BOOK,
      author: 'Author',
      title: 'Title',
      link: ''
    });
  });

  it('deleteBook should create DELETE_BOOK action', () => {
    expect(actions.deleteBook(1)).to.deep.equal({
      type: types.DELETE_BOOK,
      id: 1
    });
  });

  it('editBook should create EDIT_BOOK action', () => {
    expect(actions.editBook(1, 'Author', 'Title')).to.deep.equal({
      type: types.EDIT_BOOK,
      id: 1,
      author: 'Author',
      title: 'Title'
    });
  });

});
