import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { expect } from 'chai';

const props = {
  addBook: function(author, title, link){
    return { 
      type: 'ADD_BOOK', 
      payload: {
        author: author, 
        title: title, 
        link: link }
    };
  }
};

describe('Header component', () => {
  let output;
  beforeEach(()=> {
    output = shallow(<Header {...props} />);
  });
  it('should have been rendered properly', () => { 
    expect(output.node.type).to.equal('div');
  });
  it('should render form for input data', () => {
    const _wrapper = output.find('.add-book');
    expect(_wrapper.node.type).to.equal('form');
  });
});  
