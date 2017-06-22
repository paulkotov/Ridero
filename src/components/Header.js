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
      title: '',
      link: '',
      width: 145,
      height: 205
    };
  }

  onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({ [''+fieldName]: e.target.value.trim() });
    } else {
      this.setState({ [''+fieldName]:true });
    }
  }
  
  onClickHandler = () => {
    this.refs.photo.click();
  }

  onAddBookHandler = e => {
    e.preventDefault();
    const author = this.AuthorInput.state.text;
    const title = this.TitleInput.state.text;
    const link = this.state.link;
    this.props.addBook(author, title, link);
    this.AuthorInput.state.text='';
    this.TitleInput.state.text ='';
    this.setState({ link: '' });


  }

  loadCoverImage = event => {
    let file = event.target.files[0];
    let fileReader = new FileReader();
      
    fileReader.onload = fileEvent => {
      this.setState({ link: fileEvent.target.result });
    };
 
    fileReader.readAsDataURL(file);
  }

  
  render() {
    return (
      <div>
        <h1 className="title">Library</h1>
        <header className="header">
          Add Book<br/>
          <div className="cover" onClick={this.onClickHandler}>
            <Image className="thumbnail" image={this.state.link} data-title="Load cover image"/><br/>
            <input id="bookCover" 
                    type="file" 
                    className="cover-hiddenElement" 
                    ref="photo" 
                    onChange={this.loadCoverImage.bind(this)}/>
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
          <button className="add btn btn-default" 
                    onClick={this.onAddBookHandler}
                    ref='alert_button'>
                    Add Book
          </button>  
        </form>
      </header>
    </div>
    );
  }
}
