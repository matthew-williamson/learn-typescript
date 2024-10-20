import React, { useState } from "react";
import { Stack, Box, TextareaAutosize } from "@mui/material";

export const TerminalInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Stack direction="row">
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <TextareaAutosize
          value={inputValue}
          onChange={handleInputChange}
          style={{
            width: "100%",
            resize: "none",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            outline: "none",
            fontFamily: "monospace",
          }}
          placeholder="Type here..."
          autoFocus
        />
      </Box>
    </Stack>
  );
};
