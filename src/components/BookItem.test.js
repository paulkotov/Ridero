import React from 'react';
import BookItem from './BookItem';
import { shallow } from 'enzyme';
import { expect } from 'chai';

const props = {
  book: {
    author: 'Arthur Conan Doyle',
    title: 'Sherlock Holmes',
    id: 1,
    img: {
      link: '',
      width: 145,
      height: 205
    }
  },
  editBook: function(author, title, link){
    return { 
      type: 'EDIT_BOOK', 
      payload: {
        author: author, 
        title: title, 
        link: link }
    };
  },

  deleteBook: function(){
    return {};
  },
  completeBook: function(){
    return {};
  }
};

describe('BookItem', () => {
  it('should have been rendered properly', () => {
    const _wrapper = shallow(<BookItem {...props} />);
    expect(_wrapper.node.type).to.equal('li');
    expect(_wrapper.node.props.className).to.equal('');

  });
});


