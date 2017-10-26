import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Navbar from './navbar/Navbar.container';
import Sidebar from './sidebar/Sidebar.container';
import MobileBar from './navbar/MobileBar.container';

// ! ESlint disble rule ! //
/*eslint jsx-a11y/href-no-hash:0 */

class App extends Component {

  render() {
    return(
      <div class="columns is-gapless is-mobile is-marginless main-col">

        <MediaQuery query="(min-width: 768px)">
          <div class="column is-narrow red">

            <div className="sidebar-top">

            </div>

            <div className="sidebar-main">
              <Sidebar />
            </div>

          </div>
        </MediaQuery>

        <div className="column">
          <MediaQuery query="(max-width: 768px)">
            <MobileBar />
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default App;
