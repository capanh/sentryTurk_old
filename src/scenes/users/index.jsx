import React, { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";
import Dialog from '@mui/material/Dialog';
import UserForm from "./UserForm";


const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [modalOpen, setmodalOpen] = useState(false);

  const handleOpen = () => {
    setmodalOpen(true);
  };

  const handleClose = () => {
    setmodalOpen(false);
  }

  const columns = [
    { field: "id", headerName: "ID", headerAlign: "left" , width:20},
    {
      field: "name",
      headerName: "Name",
      headerAlign:"center",
      align: "center",
      width:250
    },
    {
      field: "username",
      headerName: "Username",
      type: "number",
      headerAlign:"center",
      align: "center",
      width:250
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign:"center",
      align: "center",
      width:300
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      width:400,
      headerAlign:"center",
      align: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "Admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "Read-only User" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <React.Fragment>
      
      <Box m="20px">

        <Header
          title="Users"
          subtitle="Managing the Users and Administrators"
        />
        <Box
          height="75vh"
          position={"relative"}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.grey[900],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.grey[900],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
        <Box display={"flex"} gap={"5px"} position={"relative"} m="10px">
        <Button onClick={handleOpen} variant="text" sx={{ background: colors.blueAccent[700] }}>
          Add New User
        </Button>
        <Dialog open={modalOpen} onClose={handleClose}>
        <UserForm onClose={handleClose} />
        </Dialog>
      </Box>
            <Box position={"relative"} ml={"10px"}>
            <DataGrid checkboxSelection sx={{ width: "1300px"}} rows={mockDataTeam} columns={columns} />
            </Box>
          
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Users;
