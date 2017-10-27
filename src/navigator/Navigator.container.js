import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// import List from 'material-ui/List';

import { grey } from 'material-ui/colors';

const drawerWidth = 300;
const topBarHeight= 80;

const styles = theme => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: grey[50],
    height: `${topBarHeight}px`
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    background: grey[900]
  },
  drawerHeader: {
    minHeight: 100
  },
  content: {
    backgroundColor: grey[300],
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: `${topBarHeight}px`
  }
});

class Navigator extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.appFrame}>

        <AppBar className={classes.appBar}>
          <Toolbar>
            Hello
          </Toolbar>
        </AppBar>

        <Drawer type="permanent" classes={{ paper: classes.drawerPaper }}>
          <div className={classes.drawerHeader} />


        </Drawer>

        <main className={classes.content}>

        </main>

      </div>
    )
  }
}

export default withStyles(styles)(Navigator);