import React, { useState, useEffect } from 'react';
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, CssBaseline, Card, CardContent } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import axios from 'axios'; 

const drawerWidth = 240;

const Dashboard = () => {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    fetchStudentCount();
  }, []);

  const fetchStudentCount = async () => {
    try {
      const response = await axios.get('https://api.example.com/students/count');
      setStudentCount(response.data.count); 
    } catch (error) {
      console.error('Error fetching student count:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,backgroundColor:'grey'}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component="a" href="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component='a' href='/StudentForm' >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ flexGrow: 1, padding: '20px' ,}}>
        <Toolbar />
    
       
      </main>
    </div>
  );
};

export default Dashboard;