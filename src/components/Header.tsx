import { Stack, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: (theme) => theme.palette.primary.dark,
        p: 2,
      }}
    >
      <Typography>Learn TypeScript</Typography>
    </Stack>
  );
};
