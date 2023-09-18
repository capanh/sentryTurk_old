
import Dashboard from "./scenes/dashboard";
import Settings from "./scenes/settings";
import Reports from "./scenes/reports";
import Login from "./scenes/login";
import Agents from "./scenes/agents";
import Topbar from "./scenes/global/Topbar";
import ProSidebar from "./scenes/global/ProSidebar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
 
<ColorModeContext.Provider value={colorMode}>
<ThemeProvider theme={theme}>
  <CssBaseline />
  <div className="app">
    <ProSidebar isSidebar={isSidebar} />
    <main className="content">
      <Topbar setIsSidebar={setIsSidebar} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />    
      </Routes>
    </main>
  </div>
</ThemeProvider>
</ColorModeContext.Provider>
  );
}

export default App;
