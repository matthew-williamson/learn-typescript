import { Box, Stack, Typography } from "@mui/material";

interface Level {
  level: number;
  title: string;
  category: string;
  instructions: string[];
  hints: string[];
}
const level: Level = {
  level: 1,
  title: "Naming Things is Hard",
  category: "String Constants",
  instructions: [
    "Welcome, Unknown Player! Uhm... What is your name?",
    "Declare your name in the editor to the right using TypeScript.",
  ],
  hints: [
    "TypeScript is essentially JavaScript with static typing",
    "There are multiple ways to define variables in TypeScript/JavaScript",
    "The `const` keyword defines a constant that cannot be reassigned",
    "The `let` keyword defines a constant that can be reassigned",
  ],
};

export const Instructions = () => {
  return (
    <Stack spacing={1}>
      <Box>
        <Typography>
          Level {level.level}: {level.title}
        </Typography>
      </Box>
      <Box>
        {level.instructions.map((text) => (
          <Typography key={text}>{text}</Typography>
        ))}
      </Box>
      <Box>
        <Typography>Hints:</Typography>
        {level.hints.map((text) => (
          <Typography key={text}>- {text}</Typography>
        ))}
      </Box>
    </Stack>
  );
};
