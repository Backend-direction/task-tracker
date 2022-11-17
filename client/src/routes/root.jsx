import { useState } from 'react';
import { 
  Outlet,
} from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MiniDrawer from '../components/drawer/drawer';
import AppBar from '../components/app-bar/app-bar';

export default function Root() {
  const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar handleDrawerOpen={handleDrawerOpen} open={open}/>
      <MiniDrawer drawerState={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '64px' }}>
        <Outlet />
      </Box>
    </Box>
  );
}