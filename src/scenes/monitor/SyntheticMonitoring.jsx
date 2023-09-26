import { Box,  InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";
import Header from "../../components/Header";



const SyntheticMonitoring = () => {


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Synthetic Monitoring"
          subtitle="Visualize your test results"
        />
      </Box>
      <Box>
      
    
        <InputLabel id="access-level-label">Access level</InputLabel>
        <Select
          labelId="access-level-label"
          id="access-level-select"
          name="accessLevel"
          value={"Test Name"}
          color='secondary'
        >
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Read-Only User</MenuItem>
        </Select>
      
        
      </Box>

      <Box></Box>

      <Box></Box>
    </Box>
  );
};

export default SyntheticMonitoring;
