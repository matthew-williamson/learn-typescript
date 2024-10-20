import { Button, Stack } from "@mui/material";
import { useContext } from "react";
import { LevelContext } from "../context/levels";

export const UserControls = () => {
  const { runCode } = useContext(LevelContext);

  return (
    <Stack direction="row" sx={{ p: 1, justifyContent: "flex-end" }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
        onClick={runCode}
      >
        Run
      </Button>
    </Stack>
  );
};
