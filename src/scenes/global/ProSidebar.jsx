import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import React from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
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
 
        <div className="pro-sidebar-layout" >
          <Box
            sx={{
              "& .ps-sidebar-container": {
                background: `${colors.primary[400]} !important`,
                height:'100%'
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
            <Sidebar collapsed={isCollapsed} style={{ height: "100vh" }} >
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
                      <Typography variant="h3" color={colors.grey[100]}>
                        SentryTurk
                      </Typography>
                      <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlinedIcon />
                      </IconButton>
                    </Box>
                  )}
                </MenuItem>

                {!isCollapsed && (
                  <Box mb="25px">
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        src={`../../assets/user.png`}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                      />
                    </Box>
                    <Box textAlign="center">
                      <Typography
                        variant="h2"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                      >
                        Jessica Smith
                      </Typography>
                      <Typography variant="h5" color={colors.greenAccent[500]}>
                        Smart Admin
                      </Typography>
                    </Box>
                  </Box>
                )}

                <Box paddingLeft={isCollapsed ? undefined : "10%"} >
                  <Item
                    title="Home Page"
                    to="/"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />

                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0px 5px 20px",
                    display:
                    isCollapsed
                      ? "none"
                      : "block"
                    }}
                  >
                    Data
                  </Typography>
                  <Item
                    title="Live Data"
                    to="/"
                    icon={<PeopleOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Applications"
                    to="/applications"
                    icon={<ContactsOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Item
                    title="Agents"
                    to="/agents"
                    icon={<ContactsOutlinedIcon />}
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
                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0px 5px 20px",
                    display:
                    isCollapsed
                      ? "none"
                      : "block"
                    }}
                  >Engagements
                  </Typography>

                  <Item
                    title="Syntetic Tests "
                    to="/settings"
                    icon={<PieChartOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0px 5px 20px",
                    display:
                    isCollapsed
                      ? "none"
                      : "block"
                    }}
                    
                  >
                    Settings
                  </Typography>

                  <Item
                    title="Settings "
                    to="/settings"
                    icon={<PieChartOutlineOutlinedIcon />}
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
