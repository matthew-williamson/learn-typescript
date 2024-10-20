import { Box, Stack, Typography } from "@mui/material";

interface Level {
  level: number;
  title: string;
  category: string;
  instructions: string[];
  hints?: string[];
}
const level: Level = {
  level: 1,
  title: "Naming Things is Hard!",
  category: "String Constants",
  instructions: [
    "Welcome, Unknown Player! Uhm... What is your name?",
    "In order for us to continue, we need to name your character.",
    "Using a `const` and a strong type of `string`, declare your name in the editor to the right using TypeScript.",
  ],
};

export const Instructions = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography>
          Level {level.level}: {level.title}
        </Typography>
      </Box>
      <Stack spacing={2}>
        {level.instructions.map((text) => (
          <Typography key={text}>{text}</Typography>
        ))}
      </Stack>
      {level.hints && (
        <Box>
          <Typography>Hints:</Typography>
          {level.hints.map((text) => (
            <Typography key={text}>- {text}</Typography>
          ))}
        </Box>
      )}
    </Stack>
  );
};
