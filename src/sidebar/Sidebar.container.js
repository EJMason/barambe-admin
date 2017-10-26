import React, { Component } from 'react';

export default class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  render() {
    return (
      <div className="column is-narrow sidebar-main red">

          <aside className="menu">

            <ul className="menu-list">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Bar Info</a></li>
              <li><a href="#">Employees</a></li>
            </ul>

            <p className="menu-label">Edit Menu</p>

            <ul className="menu-list">
              <li><a href="#">Ingredients</a></li>
              <li><a href="#">Menu Items</a></li>
            </ul>

            <p className="menu-label">Analytics</p>

          </aside>

      </div>
    )
  }
}