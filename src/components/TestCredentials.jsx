import React, { useState } from "react";
import { Box, useTheme, Button,Menu , MenuItem} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { tokens } from "../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const TestCredentials = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "credentialName", headerName: "Credential Name" , width: 100,headerAlign: "center" , align:"center"},
    { field: "credentialValue", headerName: "Credential Value", width: 200, headerAlign: "center" , align:"center",},
    { field: "tests", headerName: "Tests" ,headerAlign: "center" , width:200,align:"center"},
    { field: "lastModified" , headerName:"Last Modified",headerAlign: "center" , width:200,align:"center" },
    {
      field: "moreActions",
      headerName: "More Actions",
      renderCell: () => <MoreActions />,
      width: 20,
      align:"center",
    },
  ];

  const rows = [
    { id: 1, credentialName: 'Credential 1', credentialValue: '********', tests: 5, lastModified: '2023-09-23' },
    { id: 2, credentialName: 'Credential 2', credentialValue: '********', tests: 8, lastModified: '2023-09-22' },
    { id: 3, credentialName: 'Credential 3', credentialValue: '********', tests: 10, lastModified: '2023-09-21' },
    { id: 4, credentialName: 'Credential 4', credentialValue: '********', tests: 3, lastModified: '2023-09-20' },
    { id: 5, credentialName: 'Credential 5', credentialValue: '********', tests: 7, lastModified: '2023-09-19' },
    { id: 6, credentialName: 'Credential 6', credentialValue: '********', tests: 12, lastModified: '2023-09-18' },
    { id: 7, credentialName: 'Credential 7', credentialValue: '********', tests: 9, lastModified: '2023-09-17' },
    { id: 8, credentialName: 'Credential 8', credentialValue: '********', tests: 6, lastModified: '2023-09-16' },
    { id: 9, credentialName: 'Credential 9', credentialValue: '********', tests: 15, lastModified: '2023-09-15' },
    { id: 10, credentialName: 'Credential 10', credentialValue: '********', tests: 4, lastModified: '2023-09-14' },
  ];
  

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

  return (
    <Box
      p={"5px"}
      border={"solid gray 1px "}
      borderRadius={"5px"}
      width={"830px"}
      position={"relative"}
    >
      <Box display={"flex"} gap={"5px"} position={"relative"} m="10px">
        <Button variant="text" sx={{ background: colors.blueAccent[700] }}>
          Add New Credential
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
            width: "800px",
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

export default TestCredentials;
