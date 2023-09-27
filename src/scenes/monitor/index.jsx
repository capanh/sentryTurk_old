import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { teamData } from "../../data/mockData";
import { tokens } from "../../theme";
import VirtualizedList from "../../components/VirtualizedList";




const RealTimeMonitorDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Real Time Monitoring" subtitle="Endpoint Metrics" />
      </Box>
      <Box
        display={"flex"}
        flexGrow={1}
        gap={"30px"}
        alignContent={"center"}
        justifyContent={"left"}
        border={"solid grey 1px"}
        padding="8px"
        borderRadius={"5px"}
        boxShadow={"2"}
      >
        <Autocomplete
          disableCloseOnSelect
          multiple
          id="departmentFilter"
          options={teamData}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Departments"
              placeholder="Select the department"
              sx={{ color: colors.blueAccent[500] }}
            />
          )}
          sx={{ width: "300px" }}
        />

        <Autocomplete
          disableCloseOnSelect
          multiple
          id="userGroupFilter"
          options={teamData}
          getOptionLabel={(options) =>
            options.members.map((option) => (
              <React.Fragment>{option.name}</React.Fragment>
            ))
          }
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="User Groups"
              placeholder="Select the User Group"
            />
          )}
          sx={{ width: "300px" }}
        />

        <Autocomplete
          disableCloseOnSelect
          multiple
          id="usersFilter"
          options={teamData}
          getOptionLabel={(options) =>
            options.members.map((option) => (
              <React.Fragment>{option.name}</React.Fragment>
            ))
          }
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Departments"
              placeholder="Select the department"
            />
          )}
          sx={{ width: "300px" }}
        />

        <Box flex={1}></Box>
        <Box
          display={"flex"}
          alignContent={"center"}
          alignSelf={"center"}
          height={"40px"}
          mr={"5px"}
        >
          <Button sx={{ backgroundColor: colors.blueAccent[700] }}>
            Apply Filter
          </Button>
        </Box>
      </Box>

      <Typography variant="h3" color={colors.primary[500]} mt={"15px"}>
        {" "}
        Top 5 application impact{" "}
      </Typography>

      
      {/*  map fonksiyonu ile cardlar ekle*/}
        <Box border={'solid grey 1px'} padding={5} mt={'10px'} boxShadow={2} borderRadius={'5px'}>
        
        <VirtualizedList />
        </Box>
      
      
    </Box>
  );
};

export default RealTimeMonitorDashboard;
