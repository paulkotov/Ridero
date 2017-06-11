import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from '../constants/ActionTypes';

const initialState = [
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
];

export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        {
          id: state.reduce((maxId, book) => Math.max(book.id, maxId), -1) + 1,
          author: action.author,
          title: action.title,
          img: { link: action.link }
        },
        ...state
      ];

    case DELETE_BOOK:
      return state.filter(book =>
        book.id !== book.id
      );

    case EDIT_BOOK:
      return state.map(book =>
        book.id === action.id ?
          { ...book, author: action.author, title: action.title } :
          book
      );

    default:
      return state;
  }
}
