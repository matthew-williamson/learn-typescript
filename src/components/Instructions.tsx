import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { LevelContext } from "../context/levels";

export const Instructions = () => {
  const { currentLevel } = useContext(LevelContext);

  return (
    <Stack spacing={2}>
      <Box>
        <Typography>
          Level {currentLevel.level}: {currentLevel.title}
        </Typography>
      </Box>
      <ReactMarkdown
        components={{
          span: ({ children }) => <Typography>{children}</Typography>,
          p: ({ children }) => <Typography>{children}</Typography>,
          code: ({ children }) => (
            <Typography
              component="span"
              sx={{ backgroundColor: (theme) => theme.palette.primary.dark }}
            >
              {children}
            </Typography>
          ),
        }}
      >
        {currentLevel.instructions}
      </ReactMarkdown>
    </Stack>
  );
};
