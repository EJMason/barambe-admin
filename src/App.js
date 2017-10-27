import React, { Component } from 'react';
// import MediaQuery from 'react-responsive';
import { withStyles } from 'material-ui/styles';

// Top Level
import Navigator from './navigator/Navigator.container';


// ! ESlint disble rule ! //
/*eslint jsx-a11y/href-no-hash:0 */
const drawerWidth = 300;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: 0,
    zIndex: 1,
    overflow: 'hidden',
  },
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes } = this.props;

    return (
    <div className={classes.root}>
        <Navigator />
    </div>
  );
  }
}

export default withStyles(styles)(App);
