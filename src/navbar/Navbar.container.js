import React from 'react';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      logo: 'http://one-call.ca/wp-content/uploads/2013/08/logo.png',
      businessName: 'Dev Bar'
    }
  }

  render() {
    return (
      <div>
        <nav className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <figure className="image is-64x64">
                <img src={this.state.logo} alt="some logo"/>
              </figure>
              <h2 class="title is-4">{this.state.businessName}</h2>
            </div>
          </div>

          <div className="level-right">
            <div className="level-item">

            {/* Logout Button */}
            <a class="button">
              <span>Logout</span>
              <span class="icon">
                <i class="fa fa-sign-out"></i>
              </span>
            </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

