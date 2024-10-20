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
    "Welcome, UNKNOWN! Uhm... What is your name?",
    "In the editor to the right, we have declared an interface called `Character`, and then a constant `character` that implements that interface.",
    "Please replace the value of the \"name\" property with your character's new name."
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
