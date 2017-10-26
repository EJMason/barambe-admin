import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

// import Navbar from './navbar/Navbar.container';
import Sidebar from './sidebar/Sidebar.container';
import MobileBar from './navbar/MobileBar.container';
import BodyArea from './bodyArea/Body.container';

// ! ESlint disble rule ! //
/*eslint jsx-a11y/href-no-hash:0 */

class App extends Component {

  render() {
    return(
      <div className="columns is-gapless is-mobile is-marginless bg-area">

        <MediaQuery query="(min-width: 768px)">
          <div className="column is-narrow">

            <div className="sidebar-top">

            </div>
            <div className="side-color" />
            <div className="sidebar-main shadow-right">
              <Sidebar />
            </div>

          </div>
        </MediaQuery>

        <div className="column">
          <MediaQuery query="(max-width: 768px)">
            {(matches) => {
              if (matches) {
                return <MobileBar />;
              } else {
                return (
                  <div className="tabs is-right nav-main-bar">
                    <ul>
                      <li>
                        <a>Logout <i className="fa fa-sign-out" aria-hidden="true"></i></a>
                      </li>
                    </ul>
                  </div>
                );
              }
            }}

          </MediaQuery>


          <div className="">
            <BodyArea />
          </div>


        </div>
      </div>
    );
  }
}

export default App;
