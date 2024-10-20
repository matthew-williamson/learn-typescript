import { Stack, ThemeProvider } from "@mui/material";
import "./App.css";
import { theme } from "./theme";
import { Header } from "./components/Header";
import { TopPanel } from "./components/TopPanel";
import { BottomPanel } from "./components/BottomPanel";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column" sx={{ height: "100vh", overflow: "hidden" }}>
        <Header />
        <TopPanel />
        <BottomPanel />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
