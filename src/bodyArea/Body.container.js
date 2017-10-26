import React, { Component } from 'react';

export default class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      active: 'dashboard',
    }
  }

  render() {
    return (
      <div className="container is-fluid">
        This is the bar info form
      </div>
    )
  }
}