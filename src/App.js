import React, { Component } from 'react';
// import MediaQuery from 'react-responsive';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import Topbar from './topBar/Topbar.container';
import Sidebar from './sidebar/Sidebar.container';

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
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: '',
  content: {
    backgroundColor: theme.palette.primary['A700'],
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 0,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { classes } = this.props;

    return (
    <div className={classes.root}>
      <div className={classes.appFrame}>

        {/* We will component everything under here... */}

        <Topbar></Topbar>

        <Sidebar />

        <main className={classes.content}>
          <Typography type="body1" noWrap>

            This is the main area


          </Typography>
        </main>

      </div>
    </div>
  );
  }
}

export default withStyles(styles)(App);
