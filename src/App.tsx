import { Divider, Stack, ThemeProvider } from "@mui/material";
import "./App.css";
import { theme } from "./theme";
import { Header } from "./components/Header";
import { TopPanel } from "./components/TopPanel";
import { BottomPanel } from "./components/BottomPanel";
import { UserControls } from "./components/UserControls";
import { LevelContextProvider } from "./context/LevelContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LevelContextProvider>
        <Stack direction="column" sx={{ height: "100vh", overflow: "hidden" }}>
          <Header />
          <TopPanel />
          <Divider />
          <BottomPanel />
          <UserControls />
        </Stack>
      </LevelContextProvider>
    </ThemeProvider>
  );
};

export default App;
