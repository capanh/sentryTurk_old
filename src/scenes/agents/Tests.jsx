import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";

const Tests = () => {
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
    { field: "testName", headerName: "Test Name" },
    { field: "type", headerName: "Type" },
    {
      field: "tag",
      headerName: "Tags",
      width: 300,
      renderCell: (params) => {
        if (!Array.isArray(params.value)) {
          console.error("params.value is not an array");
          return null; // Handle the non-array case, e.g., return null or display an error message
        }

        return (
          <div display="flex" gap="5px">
            {params.value.map((tagItem, tagIndex) => (
              <Chip
                key={tagIndex}
                label={tagItem}
                variant="rounded"
                sx={{
                  "& .MuiChip-colorPrimary": {
                    color:colors.blueAccent[500]
                  },
                }}
              />
            ))}
          </div>
        );
      },
    },

    { field: "target", headerName: "Target", width: 300 },

    {
      field: "alerts",
      headerName: "Alerts",
      renderCell: (params) => {
        const { value } = params;

        return value ? (
          <CheckIcon style={{ color: "green" }} />
        ) : (
          <CloseIcon style={{ color: "red" }} />
        );
      },
    },
    {
      field: "enabled",
      headerName: "Enabled",
      renderCell: (params) => {
        const { value } = params;

        return value ? (
          <CheckIcon style={{ color: "green" }} />
        ) : (
          <CloseIcon style={{ color: "red" }} />
        );
      },
    },
    {
      field: "moreActions",
      headerName: "More Actions",
      renderCell: () => <MoreActions />,
      width: "20px",
    },
  ];

  const rows = [
    {
      id: 1,
      testName: "Test 1",
      type: "DNS",
      tag: ["Tag 1", "Tag 2"],
      target: "http://example.com",
      alerts: true,
      enabled: true,
    },
    {
      id: 2,
      testName: "Test 2",
      type: "WEB",
      tag: ["Tag 2", "Tag 3"],
      target: "http://example.org",
      alerts: false,
      enabled: false,
    },
    {
      id: 3,
      testName: "Test 3",
      type: "PING",
      tag: ["Tag 3"],
      target: "192.168.1.1",
      alerts: true,
      enabled: true,
    },
    {
      id: 4,
      testName: "Test 4",
      type: "TRACE",
      tag: ["Tag 4", "Tag 5"],
      target: "http://example.net",
      alerts: false,
      enabled: false,
    },
    {
      id: 5,
      testName: "Test 5",
      type: "DNS",
      tag: ["Tag 5", "Tag 6"],
      target: "http://example2.com",
      alerts: true,
      enabled: true,
    },
    {
      id: 6,
      testName: "Test 6",
      type: "WEB",
      tag: ["Tag 6"],
      target: "http://example3.org",
      alerts: false,
      enabled: true,
    },
    {
      id: 7,
      testName: "Test 7",
      type: "PING",
      tag: ["Tag 7"],
      target: "8.8.8.8",
      alerts: true,
      enabled: false,
    },
    {
      id: 8,
      testName: "Test 8",
      type: "TRACE",
      tag: ["Tag 8"],
      target: "http://example4.net",
      alerts: false,
      enabled: true,
    },
    {
      id: 9,
      testName: "Test 9",
      type: "DNS",
      tag: ["Tag 9"],
      target: "http://example5.com",
      alerts: true,
      enabled: false,
    },
    {
      id: 10,
      testName: "Test 10",
      type: "WEB",
      tag: ["Tag 10"],
      target: "http://example6.org",
      alerts: false,
      enabled: true,
    },
  ];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      p={"5px"}
      border={"solid gray 1px "}
      borderRadius={"5px"}
      width="1030px"
      position={"relative"}
      boxShadow={2}
    >
      <Box display={"flex"} gap={"5px"} position={"relative"} m="10px">
        <Button variant="text" sx={{ background: colors.blueAccent[700] }}>
          Add New test
        </Button>
        <Button variant="text" sx={{ background: colors.blueAccent[700] }}>
          <KeyboardArrowDownIcon />
        </Button>
      </Box>

      <Box m="10px" position={"relative"} sx={{ height: 1000 }}>
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
            width: "1000px",
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

export default Tests;
