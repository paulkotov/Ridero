import books from './books';
import * as types from '../constants/ActionTypes';
import { expect } from 'chai';

describe('Books reducer', () => {
  it('should handle initial state', () => {
    expect(
      books(undefined, {})
    ).to.deep.equal([
      {
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
        id: 1,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }
    ]);
  });

  it('should handle ADD_BOOK', () => {
    expect(
      books([{
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
        id: 1,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }], {
        type: types.ADD_BOOK,
        author: 'Suzanne Collins',
        title: 'The Hunger Games',
        link: ''
      })
    ).to.deep.equal([
      {
        author: 'Suzanne Collins',
        title: 'The Hunger Games',
        id: 2,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      },
      {
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
        id: 1,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }
    ]);
  });

  it('should handle DELETE_BOOK', () => {
    expect(
      books([
        {
          author: 'Arthur Conan Doyle',
          title: 'Sherlock Holmes',
          id: 1,
          img: {
            link: '',
            width: 145,
            height: 205
          }
        }, {
          author: 'Suzanne Collins',
          title: 'The Hunger Games',
          id: 2,
          img: {
            link: '',
            width: 145,
            height: 205
          }
        }
      ], {
        type: types.DELETE_BOOK,
        id: 1
      })
    ).to.deep.equal([
      {
        author: 'Suzanne Collins',
        title: 'The Hunger Games',
        id: 2,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }
    ]);
  });

  it('should handle EDIT_BOOK', () => {
    expect(
      books([
        {
          author: 'Arthur Conan Doyle',
          title: 'Sherlock Holmes',
          id: 1,
          img: {
            link: '',
            width: 145,
            height: 205
          }
        }, {
          author: 'Suzanne Collins',
          title: 'The Hunger Games',
          id: 2,
          img: {
            link: '',
            width: 145,
            height: 205
          }
        }
      ], {
        type: types.EDIT_BOOK,
        author: 'Test',
        title: 'Test',
        id: 1
      })
    ).to.deep.equal([
      {
        author: 'Test',
        title: 'Test',
        id: 1,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }, {
        author: 'Suzanne Collins',
        title: 'The Hunger Games',
        id: 2,
        img: {
          link: '',
          width: 145,
          height: 205
        }
      }
    ]);
  });
});