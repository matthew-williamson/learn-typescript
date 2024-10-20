import { Divider, Stack, Theme } from "@mui/material";
import { ScrollableSection } from "./ScrollableSection";
import { TerminalInput } from "./UserInput";
import { Instructions } from "./Instructions";

export const BottomPanel = () => (
  <Stack
    direction="row"
    sx={{ flexGrow: 1, maxHeight: "50vh", overflow: "hidden" }}
    divider={
      <Divider
        sx={{ backgroundColor: (theme) => theme.palette.grey[600] }}
        orientation="vertical"
      />
    }
  >
    <ScrollableSection
      header="Instructions"
      sx={{ backgroundColor: (theme: Theme) => theme.palette.background.paper }}
    >
      <Instructions />
    </ScrollableSection>
    <ScrollableSection
      header="Input"
      sx={{ backgroundColor: (theme: Theme) => theme.palette.common.black }}
    >
      <TerminalInput />
    </ScrollableSection>
  </Stack>
);
