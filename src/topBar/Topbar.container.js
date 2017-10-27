import React, { Component } from 'react';

import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';

import { withStyles } from 'material-ui/styles';
import { grey } from 'material-ui/colors';

// The user will logout here.

// The user image will be displayed
// The Logo will be displayed here
const drawerWidth = 300;

const styles = theme => ({
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: grey[50],
    height: '80px'
  }
});

class Topbar extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log('These are the props: ', this.props);
    const { classes } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          Hello
          {/* <Typography type="title" color="inherit" noWrap>
            This is the top bar area
          </Typography> */}
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Topbar);