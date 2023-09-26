import { useState } from 'react';
import React from "react";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';


function UserForm({ onClose }) {
  // Your user form component here
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    accessLevel: 20, // Default access level
  });

  const handleChange = (event) => {
    setFormData(event.target.value);

  }

  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Handle form submission and add the user
    // You can send the data to the parent component via a callback function
    // Then, close the modal
    onClose();
  };

  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: "300px",
    gap: '25px',
    padding: '16px',
  };


  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <FormControl>
        <InputLabel id="access-level-label">Access level</InputLabel>
        <Select
          labelId="access-level-label"
          id="access-level-select"
          name="accessLevel"
          value={formData.accessLevel}
          onChange={handleChange}
          color='secondary'
        >
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Read-Only User</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Add User
      </Button>
    </form>
  );
}

export default UserForm;
