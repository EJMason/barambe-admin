import React, { Component } from 'react';

import Navbar from './navbar/Navbar.container';
import Sidebar from './sidebar/Sidebar.container';

// ! ESlint disble rule ! //
/*eslint jsx-a11y/href-no-hash:0 */

class App extends Component {
  render() {
    return (
      <div>
        <div className="container is-widescreen red">
          <Navbar />
        </div>
        <div className="columns is-mobile is-gapless">

          {/* this is the sidebar */}
          <div className="column is-one-quarter red">
            <Sidebar />
          </div>
          <div className="column red">
            body area
          </div>
        </div>

      </div>
    );
  }
}

export default App;
