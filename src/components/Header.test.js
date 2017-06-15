import React from 'react';
//import { ShallowRenderer } from 'react-test-renderer/shallow';
import Header from './Header';
//import TextInput from './TextInput';
import { expect, shallow } from 'enzyme';
import { jest } from 'jest';

const props = {
  addBook: jest.fn()
};

  // const setup = () => {
  //   return {
  //     props: props,
  //     output: output,
  //     renderer: renderer
  //   };
  // };

describe('Header component', () => {
  let output;
  beforeEach(()=> {
    output = shallow(<Header {...props} />);
  });
  it('should render correctly', () => { 
    expect(output.type).to.equal('div');
  });
  it('should render form for input data', () => {
    const _wrapper = output.find('add-book');
    expect(_wrapper.props.children[0].type).to.equal('TextInput()');
  });
});  
