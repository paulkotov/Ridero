import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextInput from './TextInput';
import './BookItem.css';

export default class BookItem extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    editBook: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired
  };
  
  constructor(props){
    super(props);  
    this.state = {
      editing: false,
    };
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  }

  handleSave = (id, name, text) => {
    if (text.length === 0) {
      this.props.deleteBook(id);
    } else {
      this.props.editBook(id, name, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const { book, editBook, deleteBook } = this.props;
    let element;
    if (this.state.editing) {
      element = (
        <div className="edit">
          <TextInput text={book.author}
                      name="Author" 
                      editing={this.state.editing} 
                      onSave={(text, name) => this.handleSave(book.id, name, text)} 
          /><br/>
          <TextInput text={book.title} 
                      name="Title"
                      editing={this.state.editing} 
                      onSave={(text, name) => this.handleSave(book.id, name, text)} 
          />
          <button className="Save" 
                  onClick={() => editBook(book.id)} > Save </button>            
        </div>
    );
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={book.completed}
                 onChange={() => book.id} />
          <label>
            {`book Information: ID: ${book.id},
                                  Author: ${book.author}, 
                                  Title: ${book.title},
            `}                  
          </label>
          <button className="editBook" 
                  onClick={() => {this.setState({ editing: true });}} > Edit </button>
          <button className="deleteBook" 
                  onClick={() => deleteBook(book.id)} > Delete </button>
        </div>
      );
    }

    return (
      <li className={classnames({
        completed: book.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}  