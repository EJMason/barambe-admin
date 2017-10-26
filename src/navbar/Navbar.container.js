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
      <div className="columns is-mobile is-gapless">
        <div className="column is-narrow nav-logo-box">
          <div>
           here is the column
          </div>
        </div>
        <div className="column nav-main-bar">
          Here is the second column
        </div>
      </div>
    )
  }
}

