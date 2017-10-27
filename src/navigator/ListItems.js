import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';
import { withStyles } from 'material-ui/styles';

import { blue } from 'material-ui/colors';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  isActive: {
    background: blue[200]
  }
});

export const SideItem = (props) => (
  <ListItem button className={props.isActive ? props.classes.isActive : ''}>
    <ListItemIcon>
      {props.Icon}
    </ListItemIcon>
    <ListItemText inset primary={props.label} />
  </ListItem>
);


export const SidebarItem = withStyles(styles)(SideItem);
