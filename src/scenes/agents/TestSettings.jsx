import { Box } from "@mui/material";
import Header from "../../components/Header";
import React from "react";
import StyledTabs from "../../components/StyledTabs";



const TestSettings = () => {
    //const theme = useTheme();
    //const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"} >

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Test Settings" subtitle="Manage your tests and test parameters" />
      </Box>
      
      <Box sx={{ display: "flex", gap: "20px", ml:"20px"}}>
        <StyledTabs/>
       
      </Box>
    </Box>
  );
};

export default TestSettings;
