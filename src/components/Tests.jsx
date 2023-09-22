import { Box , Button, useTheme} from '@mui/material'
import React from 'react'
import { tokens } from '../theme'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
import { Menu,MenuItem } from '@mui/material';
import  MoreVertIcon from '@mui/icons-material/MoreVert'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


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
          <div style={{padding:'0px'}}>
            <Button
              
              onClick={handleMenuClick}
              startIcon={<MoreVertIcon />}
              
            >
              
            </Button>
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
        { field: 'testName', headerName: 'Test Name'},
        { field: 'type', headerName: 'Type' },
        { field: 'target', headerName: 'Target', width: 300 },
        { field: 'alerts', headerName: 'Alerts' ,
            renderCell: (params) => {
            const { value } = params;
      
            return value ? <CheckIcon style={{ color: 'green' }} /> : <CloseIcon style={{ color: 'red' }} />;
          },       
        },
        { field: 'enabled', headerName: 'Enabled',
             renderCell: (params) => {
            const { value } = params;
      
            return value ? <CheckIcon style={{ color: 'green' }} /> : <CloseIcon style={{ color: 'red' }} />;
          }
                
             
         },
        {
          field: 'moreActions',
          headerName: 'More Actions',
          renderCell: () => <MoreActions />,
          width:'20px'
        },
      ];

      const rows = [
        { id: 1, testName: 'Test 1', type: 'DNS', target: 'http://example.com', alerts: false, enabled: true },
        { id: 2, testName: 'Test 2', type: 'WEB', target: 'http://example.org', alerts: true, enabled: false },
        { id: 3, testName: 'Test 3', type: 'PING', target: '192.168.1.1', alerts: true, enabled: true },
        { id: 4, testName: 'Test 4', type: 'TRACE', target: 'http://example.net', alerts: false, enabled: false },
        { id: 5, testName: 'Test 5', type: 'DNS', target: 'http://example2.com', alerts: true, enabled: true },
        { id: 6, testName: 'Test 6', type: 'WEB', target: 'http://example3.org', alerts: false, enabled: true },
        { id: 7, testName: 'Test 7', type: 'PING', target: '8.8.8.8', alerts: true, enabled: false },
        { id: 8, testName: 'Test 8', type: 'TRACE', target: 'http://example4.net', alerts: false, enabled: true },
        { id: 9, testName: 'Test 9', type: 'DNS', target: 'http://example5.com', alerts: true, enabled: false },
        { id: 10, testName: 'Test 10', type: 'WEB', target: 'http://example6.org', alerts: false, enabled: true },
      ];
      

     

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box p={"5px"} border={"solid gray 5px "} borderRadius={"3px"} width={'1030px'} position={'relative'}>
         <Box  display={"flex"} gap={"5px"} p>
        <Button variant="text" sx={{ background: colors.blueAccent[700] }}>
          Add New test
        </Button>
        <Button variant="text" sx={{ background: colors.blueAccent[700] }}>
          <KeyboardArrowDownIcon />
        </Button>
      </Box>

      <Box sx={{ height: 1000, width:''}}>
      <DataGrid
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={columns}
        rows={rows}
        slots={{ toolbar: GridToolbar }}
        sx={{color: colors.blueAccent[300], height:'1000px',width:'1000px'}}
        
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
    </Box>
  )
}

export default Tests