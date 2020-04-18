import React from "react";
import PageContent from "./PageContent";
import NavBar from "./NavBar";
import MyTeam from "./MyTeam";
import ThemeProvider from "./contexts/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <NavBar />
        <MyTeam />
      </PageContent>
      </ThemeProvider>
  );
}

export default App;
