import React from 'react';
import DashboardIcon from 'material-ui-icons/Dashboard';
import StoreIcon from 'material-ui-icons/Store';
import CreditIcon from 'material-ui-icons/CreditCard';
import GroupIcon from 'material-ui-icons/Group';
import RoomserviceIcon from 'material-ui-icons/RoomService';
import EqualizerIcon from 'material-ui-icons/Equalizer';
import TrendingIcon from 'material-ui-icons/TrendingUp';

export const properIcon = (Ele, sty) => (<Ele className={sty} />);

export default [
  {
    identifier: 'dash',
    label: 'Dashboard',
    IconComponent: (<DashboardIcon />)
  },
  {
    identifier: 'barInfo',
    label: 'Bar Info',
    IconComponent: (<StoreIcon />)
  },
  {
    identifier: 'payment',
    label: 'Payment Info',
    IconComponent: (<CreditIcon />)
  },
  {
    identifier: 'employees',
    label: 'Employees',
    IconComponent: (<GroupIcon />)
  },
  {
    identifier: 'menu',
    label: 'Menu',
    IconComponent: (<RoomserviceIcon />)
  },
  {
    identifier: 'orders',
    label: 'Orders',
    IconComponent: (<EqualizerIcon />)
  },
  {
    identifier: 'analytics',
    label: 'Analytics',
    IconComponent: (<TrendingIcon />)
  },
]
