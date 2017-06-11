import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Main from '../components/Main';
import * as BookActions from '../actions';

const App = ({ books, actions }) => (
  <div>
    <Header addBook={actions.addBook} />
    <Main books={books} actions={actions} />
  </div>
);

App.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(BookActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
