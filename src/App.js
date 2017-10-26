import React, { Component } from 'react';

import Navbar from './navbar/Navbar.container';

// ! ESlint disble rule ! //
/*eslint jsx-a11y/href-no-hash:0 */

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
      </div>
    );
  }
}

export default App;
