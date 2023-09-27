import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MonitoringCard from "./MonitoringCard";
import LineChart from "./LineChart";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const monitoringData = [
  {
    id: 1,
    appName: "Gmail",
    totalUsers: 1000,
    location: "New York",
    score: 95,
    appLogo: "/logos/icons8-app1-48.png",
  },
  {
    id: 2,
    appName: "Dropbox",
    totalUsers: 500,
    location: "San Francisco",
    score: 88,
    appLogo: "/logos/icons8-app2-48.png",
  },
  {
    id: 3,
    appName: "Slack",
    totalUsers: 800,
    location: "London",
    score: 91,
    appLogo: "/logos/icons8-app3-48.png",
  },
  {
    id: 4,
    appName: "Custom App",
    totalUsers: 1200,
    location: "Tokyo",
    score: 82,
    appLogo: "/logos/icons8-app4-48.png",
  },
  {
    id: 5,
    appName: "Whatsapp",
    totalUsers: 600,
    location: "Sydney",
    score: 89,
    appLogo: "/logos/icons8-app5-48.png",
  },
];

const VirtualizedList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {monitoringData.map((data, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2.4}>
              <MonitoringCard {...data} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box display={"flex"} mt={"40px"} gap={"10px"} justifyContent={"center"}>
      {/* Score Over time */}
        <Box
          height="250px"
          width={"49%"}
          m="-20px 0 0 0"
          border={"solid grey 1px"}
          borderRadius={"5px"}
          boxShadow={2}
        >
          <Box mt="10px" ml="10px" display="flex " alignItems="center">
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Health Score Over time
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            ></Typography>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Page Fetch Time */}
        <Box
          height="250px"
          width={"49%"}
          m="-20px 0 0 0"
          border={"solid grey 1px"}
          borderRadius={"5px"}
          boxShadow={2}
        >
          <Box mt="10px" ml="10px" display="flex " alignItems="center">
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Fetch Time
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            ></Typography>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>


      </Box>
    </React.Fragment>
  );
};

export default VirtualizedList;
