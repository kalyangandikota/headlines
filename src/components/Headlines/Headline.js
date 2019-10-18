import React, { Component } from 'react';

class Headline extends Component {
  render() {
    const {title, url} = this.props.headline;
    return (
      <a href={url} target='_blank' rel='noopener noreferrer'>
        {title}
      </a>
    );
  }
}

export default Headline;