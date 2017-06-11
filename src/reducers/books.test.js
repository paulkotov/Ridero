import books from './books'
import * as types from '../constants/ActionTypes'

describe('Books reducer', () => {
  it('should handle initial state', () => {
    expect(
      books(undefined, {})
    ).toEqual([
      {
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
        id: 1
      }
    ]);
  });

  it('should handle ADD_BOOK', () => {
    expect(
      books([], {
        type: types.ADD_BOOK,
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
      })
    ).toEqual([
      {
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
        id: 1
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
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
      })
    ).toEqual([
      {
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
        id: 1
      }, {
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
        id: 1
      }
    ]);

    expect(
      books([
        {
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
          id: 2
        }, {
        author: 'Test',
        title: 'Test',
          id: 1
        }
      ], {
        type: types.ADD_BOOK,
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
      })
    ).toEqual([
      {
        author: 'Arthur Conan Doyle',
        title: 'Sherlock Holmes',
        id: 2
      }, {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });

  it('should handle DELETE_BOOK', () => {
    expect(
      books([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
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
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
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