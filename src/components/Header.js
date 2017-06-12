import React, { PropTypes, Component } from 'react';
import TextInput from './TextInput';
import Image from './Image';
import './Header.css';

export default class Header extends Component {
  static propTypes = {
    addBook: PropTypes.func.isRequired
  }

  constructor(){
    super();
    this.state = {
      author: '',
      title: ''
    };
  }

  handleSave = () => {

  }


  onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({ [''+fieldName]: e.target.value.trim() });
    } else {
      this.setState({ [''+fieldName]:true });
    }
  }
  
  onBtnClickHandler = e => {
    e.preventDefault();
    const author = this.AuthorInput.value;
    const title = this.TitleInput.value;
        
    this.props.addBook(author, title, '');
  }
  
  render() {
    return (
      <div>
        <h1 className="title">Library</h1>
        <header className="header">
          <div className="Cover">
            <Image  image=" " onSave={this.handleSave}/>
            <input type="file" className="Cover-hiddenElement" ref="photo" />
          </div>
          <form className='add-book'>
          <TextInput newBook
                        className="add_author"
                        ref={input => this.AuthorInput = input}
                        onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                        placeholder="Author" />
          <TextInput newBook
                        className="add_title"
                        ref={input => this.TitleInput = input}
                        onChange={this.onFieldChange.bind(this, 'titleIsEmpty')}
                        placeholder="Title" />
          <button className="add" 
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'>
                    Add Book
          </button>  
        </form>
      </header>
      <hr/>
    </div>
    );
  }
}
