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

  // render() {
  //   return (
  //     <div className="dark-theme">
  //       <nav className="level is-mobile">
  //         <div className="level-left">
  //           <div className="level-item">
  //             <figure className="image is-64x64">
  //               <img src={this.state.logo} alt="some logo"/>
  //             </figure>
  //             <h2 class="title is-4 has-text-light">{this.state.businessName}</h2>
  //           </div>
  //         </div>

  //         <div className="level-right">
  //           <div className="level-item">

  //           {/* Logout Button */}
  //           <a class="button is-danger is-inverted is-outlined">
  //             <span>Logout</span>
  //             <span class="icon">
  //               <i class="fa fa-sign-out"></i>
  //             </span>
  //           </a>
  //           </div>
  //         </div>
  //       </nav>
  //     </div>
  //   )
  // }
}

