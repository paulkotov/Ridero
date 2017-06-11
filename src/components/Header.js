import React, { PropTypes, Component } from 'react';
import TextInput from './TextInput';
import Image from './Image';
import './Header.css';

export default class Header extends Component {
  static propTypes = {
    addBook: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addBook(text);
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Library</h1>
        <header className="header">
        <Image  name="image"
                image=""
                onSave={this.handleSave}/>
        <TextInput newBook
                       name="author"
                       onSave={this.handleSave}
                       placeholder="Author" />
        <TextInput newBook
                       name="title"
                       onSave={this.handleSave}
                       placeholder="Title" />
        <button className="add" 
                  onClick={() => this.handleSave} >Add Book</button>  
      </header>
      <hr/>
      </div>
    );
  }
}
