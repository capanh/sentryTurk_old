import React, { useState } from "react";
import { Box, Button, Menu, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { MenuItem } from "react-pro-sidebar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Chip from '@mui/material/Chip';

const TestTags = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const MoreActions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };
   
    return (
      <div style={{ padding: "0px" }}>
        <Button onClick={handleMenuClick} startIcon={<MoreVertIcon />}></Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
          {/* Add more menu items as needed */}
        </Menu>
      </div>
    );
  };

  const columns = [
    { field: "color", headerName: "Tag Color" , width: 100,headerAlign: "center" , align:"center",
    renderCell: (params) => {
      const  { value } = params
      return      <div
      style={{
        width: '15px', // Set a valid width, e.g., '20px'
        height: '15px',
        backgroundColor: value,
        border: 'solid grey 1px',
        borderRadius: '50%',
        marginRight: '10px',
      }}
    ></div>
    },
    },
    { field: "tagName", headerName: "Tag Name",width: 200,headerAlign: "center" , align:"center",
    renderCell: (params) => {
        const { value } = params;

        return <Chip label={value} classes={{background:colors.grey[200]}}  />
    },
   },
    { field: "tests", headerName: "Tests" ,headerAlign: "center" , width:200,align:"center"},
    {
      field: "moreActions",
      headerName: "More Actions",
      renderCell: () => <MoreActions />,
      width: 20,
      align:"center",
    },
  ];

  const rows = [
    { id: 1, color: '#FF5733', tagName: 'Tag 1', tests: 5 },
  { id: 2, color: '#33FF57', tagName: 'Tag 2', tests: 10 },
  { id: 3, color: '#5733FF', tagName: 'Tag 3', tests: 7 },
  { id: 4, color: '#FF5733', tagName: 'Tag 4', tests: 3 },
  { id: 5, color: '#33FF57', tagName: 'Tag 5', tests: 8 },
  { id: 6, color: '#5733FF', tagName: 'Tag 6', tests: 6 },
  { id: 7, color: '#FF5733', tagName: 'Tag 7', tests: 9 },
  { id: 8, color: '#33FF57', tagName: 'Tag 8', tests: 12 },
  { id: 9, color: '#5733FF', tagName: 'Tag 9', tests: 4 },
  { id: 10, color: '#FF5733', tagName: 'Tag 10', tests: 15 },
  ];

  return (
    <Box
      p={"5px"}
      border={"solid gray 1px "}
      borderRadius={"5px"}
      width={"680px"}
      position={"relative"}
      boxShadow={2}
    >
      <Box display={"flex"} gap={"5px"} position={"relative"} m="10px" >
        <Button variant="text" sx={{ background: colors.blueAccent[700] }}>
          Add New Tag 
        </Button>
        <Button variant="text" sx={{ background: colors.blueAccent[700] }}>
          <KeyboardArrowDownIcon />
        </Button>
      </Box>
      <Box m="10px" position={"relative"}>
        <DataGrid
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          columns={columns}
          rows={rows}
          slots={{ toolbar: GridToolbar }}
          sx={{
            color: colors.blueAccent[300],
            height: "1000px",
            width: "650px",
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TestTags;
