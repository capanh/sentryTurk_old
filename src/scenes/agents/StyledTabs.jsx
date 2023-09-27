import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
// import { tokens } from "../theme";
import Tests from "./Tests";
import TestTags from "./TestTags";
import TestCredentials from "./TestCredentials"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StyledTabs() {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} boxShadow={2}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Tests" {...a11yProps(0)} />
          <Tab label="Test Tags" {...a11yProps(1)} />
          <Tab label="Credentials" {...a11yProps(2)} />
        </Tabs>
      </Box>
     
      <CustomTabPanel value={value} index={0}>
        <Tests/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TestTags/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TestCredentials/>
      </CustomTabPanel>
      
    </Box>
  );
}
