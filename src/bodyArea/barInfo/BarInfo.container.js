import React, { Component } from 'react';

export default class BarInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      active: 'dashboard',
    }
  }

  render() {
    return (
      <div className="container is-fluid red">
        This is the bar info form
      </div>
    )
  }
}