import React, { Component } from 'react';

export default class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
  }

  render() {
    return (
      <div>
        this is the sidebar
      </div>
    )
  }
}