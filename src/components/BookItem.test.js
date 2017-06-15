import React from 'react';
import TestUtils from 'react-addons-test-utils';
import BookItem from './BookItem';
//import TextInput from './TextInput';
import { expect } from 'enzyme';
import { jest } from 'jest';

// const setup = ( editing = false ) => {
//   const props = {
//     book: {
//       author: 'Arthur Conan Doyle',
//       title: 'Sherlock Holmes',
//       id: 1
//     },
//     editBook: jest.fn(),
//     deleteBook: jest.fn(),
//     completeBook: jest.fn()
//   };

//   const renderer = TestUtils.createRenderer();

//   renderer.render(
//     <BookItem {...props} />
//   );

//   let output = renderer.getRenderOutput();

//   if (editing) {
//     const label = output.props.children.props.children[1];
//     label.props.onDoubleClick({});
//     output = renderer.getRenderOutput();
//   }

//   return {
//     props: props,
//     output: output,
//     renderer: renderer
//   };
// };

describe('BookItem', () => {
  it('initial render', () => {
    const { output } = setup();

    expect(output.type).to.be('div');
    expect(output.props.className).to.be('main');

    const div = shallow().find('Book-info');

    expect(div.type).to.be('div');
    expect(div.props.className).to.be('view');

    const [ input, label, button ] = div.props.children;

    expect(input.type).to.be('input');
    expect(input.props.checked).to.be(false);

    expect(label.type).to.be('label');
    expect(label.props.children[5].props.children).to.be('Arthur Conan Doyle');

    expect(button.type).to.be('button');
    expect(button.props.className).to.be('Edit');
  });
});


