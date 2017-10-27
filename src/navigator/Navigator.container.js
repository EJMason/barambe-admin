import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
// import ListSubheader from 'material-ui/List/ListSubheader';
import List from 'material-ui/List';
import StoreIcon from 'material-ui-icons/Store';
import DraftsIcon from 'material-ui-icons/Drafts';
import DashboardIcon from 'material-ui-icons/Dashboard';
import CreditIcon from 'material-ui-icons/CreditCard';
import GroupIcon from 'material-ui-icons/Group';
import RoomserviceIcon from 'material-ui-icons/RoomService';
import TrendingIcon from 'material-ui-icons/TrendingUp';
import EqualizerIcon from 'material-ui-icons/Equalizer';



import { SidebarItem } from './ListItems';

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
  },

  listStyle: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    marginTop: '0px'
  },
  smIcon: {
    width: '50%'
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
          </Toolbar>
        </AppBar>

        <Drawer type="permanent" classes={{ paper: classes.drawerPaper }}>
          <div className={classes.drawerHeader} />
          <List className={classes.listStyle}>

            <SidebarItem Icon={<DashboardIcon />} isActive={true} label="Dashboard"/>
            <SidebarItem Icon={<StoreIcon />} label="Bar Info" />
            <SidebarItem Icon={<CreditIcon />} label="Payments" />
            <SidebarItem Icon={<GroupIcon />} label="Employees" />
            <SidebarItem Icon={<RoomserviceIcon />} label="Menu" />
            <SidebarItem Icon={<EqualizerIcon />} label="Orders" />
            <SidebarItem Icon={<TrendingIcon />} label="Analytics" />

          </List>

        </Drawer>

        <main className={classes.content}>

        </main>

      </div>
    )
  }
}

export default withStyles(styles)(Navigator);