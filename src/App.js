
import Dashboard from "./scenes/dashboard";
import Settings from "./scenes/settings";
import Reports from "./scenes/reports";
import Login from "./scenes/login";
import Agents from "./scenes/agents";
import Topbar from "./scenes/global/Topbar";
import Users from "./scenes/users"
import ProSidebar from "./scenes/global/ProSidebar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Layout from "./components/Layout";

function App() {

  const [isSidebar, setIsSidebar] = useState(true);
  const [theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {window.location.pathname !== '/login' && <ProSidebar isSidebar={isSidebar} /> }
        <main className="content">
          {window.location.pathname !== '/login' && <Topbar setIsSidebar={setIsSidebar} /> }
      <Routes>
        <Route path="/" element={<Layout/>}>
         {/* public routes*/}
        <Route path="/login" element={<Login />} />
        {/* private routes*/}
        <Route path="/" element={<Dashboard />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
      </main>
      </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;

