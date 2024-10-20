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
    <Box sx={{ flex: 1, overflowY: "auto", ...sx }}>
      <Stack
        sx={{
          p: 1,
        }}
      >
        <Typography>{header}</Typography>
      </Stack>
      <Divider />
      <Stack sx={{ p: 1 }}>{children}</Stack>
    </Box>
  );
};
