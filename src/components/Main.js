import React, { Component, PropTypes } from 'react';
import BookItem from './BookItem';
import Footer from './Footer';

export default class Main extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(){
    super();
    this.state = { 
      filter: 'SHOW_ALL',
      author: '' 
    };
  }

  handleShow = filter => {
    this.setState({ 
      filter: 'AUTHOR', 
      author: filter });
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

  resetFilter = () => {
    this.setState({
      filter: 'SHOW_ALL',
      author: ''
    });
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

    const filteredBooks = books.filter((elem) => {
      switch(this.state.filter){     
        case 'AUTHOR': 
          return (elem.author === this.state.author) ? true : false;

        default:
          return true;
      }
    });  
    const count = books.length;
    
    return (
      <div className="main">
        <ul className="books-list list-group">
          {filteredBooks.map(book =>
            <BookItem key={book.id} book={book} {...actions} />
          )}
        </ul>
        {this.renderFooter(count)}
        <button onClick={this.resetFilter}> Reset </button>
      </div>
    );
  }
}
