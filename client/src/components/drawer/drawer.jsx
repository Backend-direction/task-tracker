import * as React from 'react';
import { NavLink } from "react-router-dom";
import './drawer.css'
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import SpeedIcon from '@mui/icons-material/Speed';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SettingsIcon from '@mui/icons-material/Settings';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import LogoutIcon from '@mui/icons-material/Logout';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: '#22292f',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const drawerTopItems = [
  { title: 'Board', route: '/', icon: <SpeedIcon /> },
  { title: 'Projects', route: 'projects', icon: <EngineeringIcon />  },
  { title: 'Settings', route: 'settings', icon: <SettingsIcon /> }
];

const drawerBottomItems = [
  { title: 'Upgrade', route: 'upgrade', icon: <UpgradeIcon /> },
  { title: 'Logout', route: 'logout', icon: <LogoutIcon />  },
];


export default function MiniDrawer({ drawerState, handleDrawerClose }) {
  return (
    <Drawer 
      variant="permanent" 
      open={drawerState}
      PaperProps={{
        sx: {
          backgroundColor: "#2d3238",
        }
      }} 
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between'
        }}>
        <List>
          {drawerTopItems.map((item, index) => (
            <NavLink
              end
              key={item.title}
              to={`${item.route}`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: drawerState ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: drawerState ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    { item.icon }
              
                  </ListItemIcon>
                  <ListItemText primary={item.title} sx={{ opacity: drawerState ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>

        <List>
          {drawerBottomItems.map((item, index) => (
            <NavLink 
              key={item.title} 
              to={item.title}
              className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
              }
            >
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: drawerState ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: drawerState ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    { item.icon }
                  </ListItemIcon>
                  <ListItemText primary={item.title} sx={{ opacity: drawerState ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </NavLink>

          ))}
        </List>
      </Box>
    </Drawer>
  );
}
