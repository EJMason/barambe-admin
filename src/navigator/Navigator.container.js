import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

import DashboardIcon from 'material-ui-icons/Dashboard';
import StoreIcon from 'material-ui-icons/Store';
import CreditIcon from 'material-ui-icons/CreditCard';
import GroupIcon from 'material-ui-icons/Group';
import RoomserviceIcon from 'material-ui-icons/RoomService';
import TrendingIcon from 'material-ui-icons/TrendingUp';
import EqualizerIcon from 'material-ui-icons/Equalizer';
import { grey } from 'material-ui/colors';

import { SidebarItem, SubItem, ExpandableSidebarItem } from './ListItems';
import ListConfig from './ListConfig';

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
    color: grey[50]
    // background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    marginTop: '0px'
  },
  invIcon: {
    fill: grey[300],
  },
  line: {
    backgroundColor: grey[800],
  }
});


class Navigator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openDrawer: '',
    }
  }

  selectOpenDrawer = (drawerName) => {
    console.log('Open the drawer!');

    if(this.state.openDrawer === drawerName) {
      drawerName = '';
    }

    this.setState({
      ...this.state,
      openDrawer: drawerName
    })
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

          <Divider className={classes.line} light={true} />

            { ListConfig.reduce((iter, item) => {
              iter.push(
                <SidebarItem Icon={item.IconComponent} isActive={false} label={item.label}/>,
                <Divider className={classes.line} light={true} />
              )
              return iter;
            }, [])}


            <ExpandableSidebarItem
              toggleDrawer={this.selectOpenDrawer}
              Icon={<TrendingIcon className={classes.invIcon} />}
              label="Collapser"
              open={this.state.openDrawer === 'Collapser'}
            >
              <SubItem Icon={<TrendingIcon className={classes.invIcon} />} label="Analytics" />
            </ExpandableSidebarItem>

          </List>

        </Drawer>

        <main className={classes.content}>

        </main>

      </div>
    )
  }
}

export default withStyles(styles)(Navigator);