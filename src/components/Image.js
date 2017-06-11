import React, { Component, PropTypes } from 'react';
import './Image.css';
import image from './1.png';

export default class Image extends Component {

  static propTypes = {
    image: PropTypes.string,
    onSave: PropTypes.func
  };

  static defaultProps = {
    image
  };

  onClickHandler(){
    this.props.onSave();
  }

  render(){
    const { image } = this.props.image;

    return(
        <div className="image" onClick={this.onClickHandler}>
            <img src={image} alt=""></img> 
        </div>
    );
  }
}