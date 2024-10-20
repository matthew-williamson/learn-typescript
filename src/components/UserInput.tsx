import { useContext, useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import { Box, Stack } from "@mui/material";
import { LevelContext } from "../context/levels";

monaco.editor.defineTheme("myDarkTheme", {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#000000",
    "editor.foreground": "#FFFFFF",
    "editorCursor.foreground": "#FFFFFF",
    "editor.lineHighlightBackground": "#333333",
    "editorLineNumber.foreground": "#CCCCCC",
    "editor.selectionBackground": "#555555",
  },
});

monaco.editor.setTheme("myDarkTheme");

interface TerminalInputProps {
  tabValue: number;
}

export const TerminalInput = ({ tabValue }: TerminalInputProps) => {
  const { currentLevel, setCode } = useContext(LevelContext);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const monacoInstanceRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null,
  );

  useEffect(() => {
    if (editorRef.current) {
      monacoInstanceRef.current = monaco.editor.create(editorRef.current, {
        value: currentLevel.initialEditor,
        language: "typescript",
        automaticLayout: true, // Automatically adjust the editor layout
      });

      monacoInstanceRef.current.onDidChangeModelContent(() => {
        const value = monacoInstanceRef.current?.getValue() || "";
        setCode(value);
      });
    }

    setCode(currentLevel.initialEditor);

    return () => monacoInstanceRef.current?.dispose();
  }, [currentLevel.initialEditor, setCode]);

  return (
    <Box>
      <Stack
        ref={editorRef}
        sx={{
          backgroundColor: "black",
          minHeight: "100vh",
          width: "100%",
          opacity: tabValue === 0 ? 1 : 0,
        }}
      />
      {tabValue === 1 && <div>HI</div>}
    </Box>
  );
};
