import React, { Component } from 'react';

import BarInfo from './barInfo/BarInfo.container';

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
        <BarInfo />
      </div>
    )
  }
}