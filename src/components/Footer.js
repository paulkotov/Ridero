import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import TextInput from './TextInput';
import { SHOW_ALL, SHOW_AUTHOR } from '../constants/BookFilters';
import './Footer.css';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_AUTHOR]: 'Author'
};

export default class Footer extends Component {
  static propTypes = {
    count: PropTypes.number,
    filter: PropTypes.string.isRequired,
    onShow: PropTypes.func.isRequired
  }

  renderBookCount() {
    const { count } = this.props;
    const itemWord = count === 1 ? 'item' : 'items';

    return (
      <span className="books-count">
        <strong>{count || 'No'}</strong> {itemWord} total
      </span>
    );
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a className={classnames({ selected: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    );
  }

  onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({ [''+fieldName]: e.target.value.trim() });
    } 
  }

  onBtnClickHandler = e => {
    e.preventDefault();
    const { onShow } = this.props;
    onShow(this.CityFilterInput.state.text);
  }

  render() {
    return (
     <footer className="footer">
        {this.renderBookCount()}
        <hr/>
        <br/>Filter: 
        <TextInput type="text" 
                ref={input => this.CityFilterInput = input}
                onChange={this.onFieldChange.bind(this, 'CityFilterIsEmpty')}
                placeholder="Enter author" />{' '}
        <button className="Set Filter" 
                      onClick={this.onBtnClickHandler}> Set </button>   
      </footer> 
    );
  }
}
