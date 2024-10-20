import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark", // Dark mode like VS Code
    primary: {
      main: "#7b1fa2", // Purple accent for highlights
      light: "#ae52d4",
      dark: "#4a0072",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#29b6f6", // A blue for secondary actions
      light: "#73e8ff",
      dark: "#0086c3",
      contrastText: "#ffffff",
    },
    background: {
      default: "#1e1e1e", // Dark gray background like VS Code
      paper: "#252526", // Slightly lighter for elements like cards and modals
    },
    text: {
      primary: "#d4d4d4", // Light gray for readable text
      secondary: "#a0a0a0", // Slightly darker gray for secondary text
    },
    error: {
      main: "#f44336", // Red for errors
    },
    warning: {
      main: "#ffa726",
    },
    info: {
      main: "#29b6f6",
    },
    success: {
      main: "#66bb6a",
    },
  },
  typography: {
    fontFamily: 'Fira Code, Consolas, Monaco, "Courier New", monospace', // Monospace for a developer-focused feel
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
      color: "#ffffff",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#ffffff",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: "#7b1fa2", // Purple accent for some headers
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#d4d4d4",
    },
    button: {
      textTransform: "none", // Disable uppercase for buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px", // Keep button corners slightly rounded
          padding: "8px 16px",
        },
        containedPrimary: {
          backgroundColor: "#7b1fa2", // Purple accent for primary buttons
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#4a0072",
          },
        },
        containedSecondary: {
          backgroundColor: "#29b6f6", // Blue accent for secondary buttons
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#0086c3",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#252526", // Dark AppBar to blend with the VS Code theme
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#252526", // Paper surfaces match VS Code elements
          color: "#d4d4d4",
        },
      },
    },
  },
});
