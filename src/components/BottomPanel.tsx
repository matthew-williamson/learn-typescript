import { Divider, Stack, Tab, Tabs, Theme } from "@mui/material";
import { ScrollableSection } from "./ScrollableSection";
import { TerminalInput } from "./UserInput";
import { Instructions } from "./Instructions";
import { useState } from "react";

export const BottomPanel = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Stack
      direction="row"
      sx={{ flexGrow: 1, height: "45vh", overflow: "hidden" }}
      divider={
        <Divider
          // sx={{ backgroundColor: (theme) => theme.palette.grey[600] }}
          orientation="vertical"
        />
      }
    >
      <ScrollableSection
        header="Instructions"
        sx={{
          backgroundColor: (theme: Theme) => theme.palette.background.paper,
        }}
      >
        <Instructions />
      </ScrollableSection>
      <ScrollableSection
        header={
          <Tabs
            value={tabValue}
            onChange={(event, newValue) => setTabValue(newValue)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Input" />
            <Tab label="Console" />
          </Tabs>
        }
        sx={{ backgroundColor: (theme: Theme) => theme.palette.common.black }}
      >
        <TerminalInput tabValue={tabValue} />
      </ScrollableSection>
    </Stack>
  );
};
