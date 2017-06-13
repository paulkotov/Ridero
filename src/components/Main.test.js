import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Main from './Main';
import BookItem from './BookItem';
import Footer from './Footer';
import { SHOW_ALL } from '../constants/BookFilters';

const setup = propOverrides => {
  const props = Object.assign({
    books: [        {
      author: 'Arthur Conan Doyle',
      title: 'Sherlock Holmes',
      id: 1,
      img: {
        link: '',
        width: 100,
        height: 100
      }
    }, {
      author: 'Suzanne Collins',
      title: 'The Hunger Games',
      id: 2,
      img: {
        link: '',
        width: 100,
        height: 100
      }
    }],
    actions: {
      editBook: jest.fn(),
      deleteBook: jest.fn(),
      completeBook: jest.fn()
    }
  }, propOverrides);

  const renderer = TestUtils.createRenderer();
  renderer.render(<Main {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
};

describe('components', () => {
  describe('Main', () => {
    it('should render container', () => {
      const { output } = setup();
      expect(output.type).toBe('section');
      expect(output.props.className).toBe('main');
    });

    describe('toggle all input', () => {
      it('should render', () => {
        const { output } = setup();
        const [ toggle ] = output.props.children;
        expect(toggle.type).toBe('input');
        expect(toggle.props.type).toBe('checkbox');
        expect(toggle.props.checked).toBe(false);
      });

      describe('footer', () => {
        it('should render', () => {
          const { output } = setup();
          const [ , , footer ] = output.props.children;
          expect(footer.type).toBe(Footer);
          expect(footer.props.completedCount).toBe(1);
          expect(footer.props.activeCount).toBe(1);
          expect(footer.props.filter).toBe(SHOW_ALL);
        });

        it('onShow should set the filter', () => {
          const { output, renderer } = setup();
          const [ , , footer ] = output.props.children;
          footer.props.onShow(SHOW_ALL);
          const updated = renderer.getRenderOutput();
          const [ , , updatedFooter ] = updated.props.children;
          expect(updatedFooter.props.filter).toBe(SHOW_ALL);
        });

        it('onClearCompleted should call clearCompleted', () => {
          const { output, props } = setup();
          const [ , , footer ] = output.props.children;
          footer.props.onClearCompleted();
          expect(props.actions.clearCompleted).toBeCalled();
        });
      });

      describe('Book list', () => {
        it('should render', () => {
          const { output, props } = setup();
          const [ , list ] = output.props.children;
          expect(list.type).toBe('ul');
          expect(list.props.children.length).toBe(2);
          list.props.children.forEach((item, i) => {
          expect(item.type).toBe(BookItem);
          expect(item.props.Book).toBe(props.Books[i]);
        });
        });

        it('should filter items', () => {
          const { output, renderer, props } = setup();
          const [ , , footer ] = output.props.children;
          footer.props.onShow(SHOW_ALL);
          const updated = renderer.getRenderOutput();
          const [ , updatedList ] = updated.props.children;
          expect(updatedList.props.children.length).toBe(1);
          expect(updatedList.props.children[0].props.Book).toBe(props.Books[1]);
        });
      });
    });
  });
});