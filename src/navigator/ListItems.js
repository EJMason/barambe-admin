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
import classNames from 'classnames';

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
  activeText: {

  }
});


const SideItem = (props) => (
  <ListItem button disabled={props.isActive} className={props.isActive ? props.classes.isActive : ''}>
    <ListItemIcon>
      {props.Icon}
    </ListItemIcon>
    <ListItemText classes={{text: !props.isActive ? props.classes.inactiveText : null}} inset primary={props.label} />
  </ListItem>
);

// const ExpandableSidebarItem = (props) => (

// );

// SideItem.propTypes = {
//   isActive: PropTypes.bool,
//   classes: PropTypes.shape({
//     root:
//   })
// }


export const SidebarItem = withStyles(styles)(SideItem);
