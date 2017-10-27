import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import List from 'material-ui/List';
// import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import { blueGrey } from 'material-ui/colors';

const drawerWidth = 300;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    background: blueGrey[900]
  },
  drawerHeader: {
    minHeight: 100
  },
});

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes } = this.props;

    return (
      <Drawer type="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader} />
          <Divider />
          hello
          {/* <List>{mailFolderListItems}</List> */}
          <Divider />
          {/* <List>{otherMailFolderListItems}</List> */}
        </Drawer>
    )
  }
}

export default withStyles(styles)(Sidebar);