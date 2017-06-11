import React, { PropTypes, Component } from 'react';
//import ReactDOM from 'react-dom';
import TextInput from './TextInput';
//import Image from './Image';
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

  // handleSave = text => {
  //   if (text.length !== 0) {
  //     this.props.addBook(text);
  //   }
  // }

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
    // const author = ReactDOM.findDOMNode(this.refs.author).value;
    // const title = ReactDOM.findDOMNode(this.refs.title).value;
    // var title = textElement.value;

    // var item = [{
    //   author: author,
    //   text: title,
    //   bigText: '...'
    // }];

    // window.ee.emit('News.add', item);
    // this.setState({ textIsEmpty: true });
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
