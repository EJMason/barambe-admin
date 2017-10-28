import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TrendingIcon from 'material-ui-icons/TrendingUp';

import { grey } from 'material-ui/colors';

import { SidebarItem, SubItem, ExpandableSidebarItem } from './ListItems';
import ListConfig, {properIcon} from './ListConfig';

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
      selection: '',
    }
  }

  selectOpenDrawer = (drawerName) => {
    this.setState({
      ...this.state,
      openDrawer: this.state.openDrawer === drawerName ? '' : drawerName
    })
  }

  menuSelector = (e, menuName) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      selection: this.state.selection === menuName ? '' : menuName
    })
  }

  render() {
    console.log(`This is the selection --> |${this.state.selection}|`)
    const { classes } = this.props;
    return (
      <div className={classes.appFrame}>

        <AppBar className={classes.appBar}>
          <Toolbar></Toolbar>
        </AppBar>

        <Drawer type="permanent" classes={{ paper: classes.drawerPaper }}>
          <div className={classes.drawerHeader} />

          <List className={classes.listStyle}>

            { ListConfig.reduce((iter, item) => {
              iter.push(
                <SidebarItem
                  key={`side_${item.identifier}`}
                  toggleItem={this.menuSelector}
                  Icon={React.cloneElement(item.IconComponent, { className: classes.invIcon })}
                  ident={item.identifier}
                  isActive={this.state.selection === item.identifier}
                  label={item.label} />,
                <Divider key={`divider_${item.identifier}`} className={classes.line} light={true} />
              )
              return iter;
            }, [<Divider key={`first`} className={classes.line} light={true} />])}


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