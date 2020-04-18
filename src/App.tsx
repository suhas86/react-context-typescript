import React from "react";
import PageContent from "./PageContent";
import NavBar from "./NavBar";
import MyTeam from "./MyTeam";
import ThemeProvider from "./contexts/ThemeContext";
import TeamProvider from "./contexts/TeamContext";
function App() {
  return (
    <ThemeProvider>
      <TeamProvider>
        <PageContent>
          <NavBar />
          <MyTeam />
        </PageContent>
      </TeamProvider>
    </ThemeProvider>
  );
}

export default App;
