import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextInput from './TextInput';
import './BookItem.css';
import image from './1.png';

export default class BookItem extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    editBook: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired
  };

  static defaultProps = {
    image
  };


  constructor(){
    super();  
    this.state = {
      editing: false,
      id: 0,
      author: '',
      title: ''
    };
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  }

  onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({ [''+fieldName]: e.target.value.trim() });
    } else {
      this.setState({ [''+fieldName]: '' });
    }
  }   
  
  onBtnClickHandler = (bookId) => e => {
    e.preventDefault();
    this.setState({ id: bookId }); 
    const author = this.AuthorInput.state.text;
    const title = this.TitleInput.state.text;
        
    this.props.editBook(this.state.id, author, title);
    this.setState({ editing: false });
  }

  render() {
    const { book, deleteBook } = this.props;
    let element;
    if (this.state.editing) {
      element = (
        <div className="edit">
          <TextInput text={book.author}
                      ref={input => this.AuthorInput = input}
                      editing={this.state.editing} 
                      onChange={this.onFieldChange.bind(this, 'authorIsEmpty')} 
          /><br/>
          <TextInput text={book.title} 
                      ref={input => this.TitleInput = input}
                      editing={this.state.editing} 
                      onChange={this.onFieldChange.bind(this, 'titleIsEmpty')} 
          />
          <button className="Save" 
                  onClick={this.onBtnClickHandler(book.id)} > Save </button>            
        </div>
    );
    } else {
      element = (
        <div className="view">
            <img src={image} alt=""></img>
            <div className="Book-info">
            <label>  
              {'ID:'} <strong>{book.id}</strong>{' '}
              {'Author:'}<strong>{book.author}</strong> {' '}
              {'Title: '} <strong>{book.title}</strong>                
          </label>
          <button className="editBook btn btn-default" 
                  onClick={() => {this.setState({ editing: true });}} > Edit </button>
          <button className="deleteBook btn btn-default" 
                  onClick={() => deleteBook(book.id)} > Delete </button><br/>
          Competed: <input className="toggle"
                 type="checkbox"
                 checked={book.completed}
                 onChange={() => book.id} />
          </div>        
        </div>
      );
    }

    return (
      <li className={classnames({
        completed: book.completed,
        editing: this.state.editing,
        'list-group-item': true
      })}>
        {element}
      </li>
    );
  }
}  