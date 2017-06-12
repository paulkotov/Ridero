import React, { Component, PropTypes } from 'react';
import BookItem from './BookItem';
import Footer from './Footer';
import { SHOW_ALL, SHOW_AUTHOR } from '../constants/BookFilters';

const BOOK_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_AUTHOR]: book => book.author
};

export default class Main extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(){
    super();
    this.state = { filter: SHOW_ALL };
  }

  handleShow = filter => {
    this.setState({ filter });
  }

  renderToggleAll(completedCount) {
    const { books, actions } = this.props;
    if (books.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === books.length}
               onChange={actions.completeAll} />
      );
    }
  }

  renderFooter(count) {
    const { books } = this.props;
    const { filter } = this.state;

    if (books.length) {
      return (
        <Footer filter={filter}
                onShow={this.handleShow}
                count={count} />
      );
    }
  }

  render() {
    const { books, actions } = this.props;
    const { filter } = this.state;

    const filteredBooks = books.filter(BOOK_FILTERS[filter]);
    const count = books.length;
    
    return (
      <div className="main">
        <ul className="books-list">
          {filteredBooks.map(book =>
            <BookItem key={book.id} book={book} {...actions} />
          )}
        </ul>
        {this.renderFooter(count)}
      </div>
    );
  }
}
