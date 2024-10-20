import { Box, Divider, Stack, SxProps, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface ScrollableSectionProps extends PropsWithChildren {
  header: string;
  sx?: SxProps | Record<string, unknown>;
}

export const ScrollableSection = ({
  children,
  sx = {},
  header,
}: ScrollableSectionProps) => {
  return (
    <Box sx={{ ...sx, width: '50%'}}>
      <Stack
        sx={{
          p: 1,
        }}
      >
        <Typography>{header}</Typography>
      </Stack>
      <Divider />
      <Stack sx={{ p: 1, overflowY: "auto" }}>{children}</Stack>
    </Box>
  );
};
