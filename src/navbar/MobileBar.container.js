import React, { Component } from 'react';

export default class MobileBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  render() {
    return (
      <nav class="navbar nav-logo-box red" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>

          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    )
  }
}