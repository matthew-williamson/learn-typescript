import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowBack } from "@mui/icons-material";

export const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerItems = (
    <Box
      sx={{ width: 250, pt: "56px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "Learn", "Challenges", "Resources"].map((text) => (
          <ListItem
            key={text}
            sx={{
              cursor: "pointer",
              ":hover": { color: (theme) => theme.palette.primary.light },
            }}
          >
            <Typography>{text}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.dark,
          zIndex: 10000,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ mr: 2 }}
          >
            {drawerOpen ? <ArrowBack /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Learn TypeScript
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerItems}
      </Drawer>
    </>
  );
};
