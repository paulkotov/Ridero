import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
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

  render() {
    return (
      <footer className="footer">
        {this.renderBookCount()}
        <br/>Select filter 
        <ul className="filters">
          {[ SHOW_ALL, SHOW_AUTHOR ].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}{' || '}
            </li>
          )}
        </ul>
      </footer>
    );
  }
}
