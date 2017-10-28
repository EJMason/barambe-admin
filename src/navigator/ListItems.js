/**
 * Sidebar items
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ------------- UI Elements ------------------- //
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';
import { withStyles } from 'material-ui/styles';

import GroupIcon from 'material-ui-icons/Group';

import { blue, grey } from 'material-ui/colors';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  isActive: {
    background: blue[50]
  },
  inactiveText: {
    color: grey[300]
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    marginTop: '0px'
  },
  nestedInactive: {
    paddingLeft: theme.spacing.unit * 4,
    marginTop: '0px',
    background: blue[50]
  }
});

const SideItem = (props) => (
  <ListItem
    onClick={(e) => props.toggleItem(e, props.ident)}

    disabled={props.isActive}
    className={props.isActive ? props.classes.isActive : ''}>
    <ListItemIcon>
      {props.Icon}
    </ListItemIcon>
    <ListItemText classes={{text: !props.isActive ? props.classes.inactiveText : null}} inset primary={props.label} />
  </ListItem>
);

const _SubItem = props => (
  <ListItem button className={props.classes.nested}>
    <ListItemIcon>
      {props.Icon}
    </ListItemIcon>
    <ListItemText
      inset
      primary={props.label}
      classes={{text: !props.isActive ? props.classes.inactiveText : null}}
    />
  </ListItem>
);

const _ExpandableSidebarItem = props => (
  <div>

    <ListItem button onClick={() => props.toggleDrawer(props.label)}>
      <ListItemIcon>
        {props.Icon}
      </ListItemIcon>
      <ListItemText inset primary={props.label} />
      {props.open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>

    <Collapse in={props.open} transitionDuration="auto" unmountOnExit>
      {props.children}
    </Collapse>
  </div>
);

// SideItem.propTypes = {
//   isActive: PropTypes.bool,
//   classes: PropTypes.shape({
//     root:
//   })
// }


export const SidebarItem = withStyles(styles)(SideItem);
export const SubItem = withStyles(styles)(_SubItem);
export const ExpandableSidebarItem = withStyles(styles)(_ExpandableSidebarItem);
