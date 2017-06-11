import books from './books';
import * as types from '../constants/ActionTypes';
import { expect } from 'enzyme';

describe('Books reducer', () => {
  it('should handle initial state', () => {
    expect(
      books(undefined, {})
    ).toEqual([
      {
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
        id: 1,
        img: {
          link: '',
          width: 100,
          height: 100
        }
      }
    ]);
  });

  it('should handle ADD_BOOK', () => {
    expect(
      books([], {
        type: types.ADD_BOOK,
        author: 'Suzanne Collins',
        title: 'The Hunger Games',
      })
    ).toEqual([
      {
        author: 'Suzanne Collins',
        title: 'The Hunger Games',
        id: 1,
        img: {
          link: '',
          width: 100,
          height: 100
        }
      }
    ]);

    expect(
      books([
        {
          author: 'Arthur Conan Doyle',
          title: 'Sherlock Holmes',
          id: 1
        }
      ], {
        type: types.ADD_BOOK,
        author: 'Suzanne Collins',
        title: 'The Hunger Games',
      })
    ).toEqual([
      {
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
        id: 1
      }, {
        author: 'Suzanne Collins',
        title: 'The Hunger Games',
        id: 2
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
            width: 100,
            height: 100
          }
        }, {
          author: 'Suzanne Collins',
          title: 'The Hunger Games',
          id: 2,
          img: {
            link: '',
            width: 100,
            height: 100
          }
        }
      ], {
        type: types.DELETE_BOOK,
        id: 1
      })
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
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
            width: 100,
            height: 100
          }
        }, {
          author: 'Suzanne Collins',
          title: 'The Hunger Games',
          id: 2,
          img: {
            link: '',
            width: 100,
            height: 100
          }
        }
      ], {
        type: types.EDIT_BOOK,
        text: 'Fix the tests',
        id: 1
      })
    ).toEqual([
      {
        text: 'Fix the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });
});