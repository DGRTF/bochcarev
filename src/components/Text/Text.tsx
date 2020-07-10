import React, { Component } from 'react'
import './Text.scss';

interface ITextProps {
  text?: string;
}

export default class Text extends Component<ITextProps> {
  render() {
    return (
      <div className='text'>
        {this.props.text ? this.props.text : ''}
      </div>
    )
  }
}
