import { Divider, Stack, Theme } from "@mui/material";
import { ScrollableSection } from "./ScrollableSection";

export const BottomPanel = () => (
  <Stack direction="row" sx={{ flexGrow: 1, overflow: "hidden" }} divider={<Divider sx={{ backgroundColor: theme => theme.palette.grey[600] }}  orientation="vertical" />}>
    <ScrollableSection header='Instructions' sx={{ backgroundColor: (theme: Theme) => theme.palette.common.black }} />
    <ScrollableSection header='Input' sx={{ backgroundColor: (theme: Theme) => theme.palette.grey[800] }} />
  </Stack>
);
