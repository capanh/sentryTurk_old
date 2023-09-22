import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StreamIcon from "@mui/icons-material/Stream";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SensorsIcon from "@mui/icons-material/Sensors";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SettingsIcon from "@mui/icons-material/Settings";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.primary[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const ProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="pro-sidebar-layout">
      <Box
        sx={{
          "& .ps-sidebar-container": {
            background: `${colors.primary[400]} !important`,
            height: "100%",
          },

          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <Sidebar collapsed={isCollapsed} style={{ height: "100vh" }}>
          <Menu>
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Box sx={{ flex: 1 }}></Box>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="300px"
                    height="300px"
                    src={`../../assets/logoTranparent.png.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                    m="0px"
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "0 0 0 0" }}
                  >
                    Hüseyin Çapan
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Smart Admin
                  </Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Overview"
                to="/"
                icon={<DashboardIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{
                  m: "15px 0px 5px 20px",
                  display: isCollapsed ? "none" : "block",
                }}
              >
                Monitoring
              </Typography>
              <Item
                title="Real-Time Monitoring"
                to="/monitor"
                icon={<StreamIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              
              <Item
                title="User Journeys"
                to="/applications"
                icon={<AnalyticsIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{
                  m: "15px 0px 5px 20px",
                  display: isCollapsed ? "none" : "block",
                }}
              >
                Engagements
              </Typography>
              
                
              <SubMenu label="Agents" icon={<SensorsIcon/>} rootStyles={{color : colors.primary[100]}} >
              <Item
                title="Agent List"
                to="/agents"
                icon={<SensorsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item title="Test Settings"
                to="/agents/testSettings"
                icon={<StreamIcon />}
                selected={selected}
                setSelected={setSelected}/>



              </SubMenu>

              <Item
                title="Synthetic Monitoring "
                to="/settings"
                icon={<MonitorHeartIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{
                  m: "15px 0px 5px 20px",
                  display: isCollapsed ? "none" : "block",
                }}
              >
                Management
              </Typography>
              <Item
                title="User Management "
                to="/users"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Alerts and Notifications"
                to="/reports"
                icon={<NotificationsActiveIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Reports"
                to="/reports"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Integrations "
                to="/settings"
                icon={<IntegrationInstructionsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Organization Settings "
                to="/settings"
                icon={<SettingsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </div>
  );
};
export default ProSidebar;
