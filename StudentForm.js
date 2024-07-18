import React, { useState, useEffect } from 'react';
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, CssBaseline, Modal, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Students from './Students';

const drawerWidth = 240;

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://api.example.com/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.get('https://api.example.com/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
    
  };

  const handleDelete = async (id) => {
    try {
      console.log('Delete student with id:', id);
      // set api delete
      await axios.delete(`https://api.example.com/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,backgroundColor:'grey'}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
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
          <ListItem button component='a' href='/dashboard'>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={handleOpenModal}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Complaint_Form" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ flexGrow: 1, padding: '5px' }}>
        <Toolbar />

        <TableContainer component={Paper} style={{marginBottom:'100%'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>Course Name</TableCell>
                <TableCell>Year of Study</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Challange</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.fullname}</TableCell>
                  <TableCell>{student.coursename}</TableCell>
                  <TableCell>{student.yearofstudy}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  
                  
                  <TableCell>{student.challange}</TableCell>
                  <TableCell>
                    <IconButton aria-label="edit" onClick={() => handleEdit(student.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(student.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

    
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            
           
          }}>
            
            <Students />
          </Box>
        </Modal>
      </main>
    </div>
  );
};

export default Dashboard;
