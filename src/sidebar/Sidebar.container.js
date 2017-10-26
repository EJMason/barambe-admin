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
        <aside className="menu">

          <ul className="menu-list">
            <li>
              <a className={(this.state.active === 'dashboard') ? "is-active" : ""} href="#">
              <i class="fa fa-home" aria-hidden="true" /> Dashboard
              </a>
            </li>
            <hr />

            <p className="menu-label">Admin</p>

            <li>
              <a href="#">
              <i class="fa fa-briefcase" aria-hidden="true"></i> Bar Info
              </a>
            </li>

            <li>
              <a href="#">
              <i class="fa fa-money" aria-hidden="true"></i> Payment Info
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-user-circle" aria-hidden="true"/> Add/Remove Employees
              </a>
            </li>
          </ul>

          <p className="menu-label">Inventory</p>

          <ul className="menu-list">

            <li>
              <a href="#">
                <i class="fa fa-glass" aria-hidden="true"></i> Edit Liquors
              </a>
            </li>

            <li>
              <a href="#">
              <i class="fa fa-beer" aria-hidden="true"></i> Edit Menu
              </a>
            </li>

          </ul>

          <p className="menu-label">Analytics</p>

          <ul className="menu-list">

            <li>
              <a href="#">
              <i class="fa fa-bar-chart" aria-hidden="true"></i> Order History
              </a>
            </li>

          </ul>

        </aside>
    )
  }
}