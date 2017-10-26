import React, { Component } from 'react';

export default class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      active: 'dashboard',
    }
  }

  render() {
    return (
        <aside className="menu my-menu top">

          <ul className="menu-list">
            <li>
              <a className={(this.state.active === 'dashboard') ? "is-active" : ""} href="#">
              <i className="fa fa-home" aria-hidden="true" /> Dashboard
              </a>
            </li>

            <hr />

            <p className="menu-label">Admin</p>

            <li>
              <a href="#">
              <i className="fa fa-briefcase" aria-hidden="true"></i> Bar Info
              </a>
            </li>

            <li>
              <a href="#">
              <i className="fa fa-money" aria-hidden="true"></i> Payment Info
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-user-circle" aria-hidden="true"/> Add/Remove Employees
              </a>
            </li>
          </ul>

          <p className="menu-label">Inventory</p>

          <ul className="menu-list">

            <li>
              <a href="#">
                <i className="fa fa-glass" aria-hidden="true"></i> Edit Liquors
              </a>
            </li>

            <li>
              <a href="#">
              <i className="fa fa-beer" aria-hidden="true"></i> Edit Menu
              </a>
            </li>

          </ul>

          <p className="menu-label">Analytics</p>

          <ul className="menu-list">

            <li>
              <a href="#">
              <i className="fa fa-bar-chart" aria-hidden="true"></i> Order History
              </a>
            </li>

          </ul>

        </aside>
    )
  }
}