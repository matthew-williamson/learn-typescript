import React, { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import ts from "typescript";
import { Stack } from "@mui/material";

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

export const TerminalInput: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const monacoInstanceRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null,
  );
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    if (editorRef.current) {
      monacoInstanceRef.current = monaco.editor.create(editorRef.current, {
        value: `interface Character {\n\tname: string;\n}\n\nconst character: Character = {\n\tname: 'UNKNOWN'\n};`,
        language: "typescript",
        automaticLayout: true, // Automatically adjust the editor layout
      });

      monacoInstanceRef.current.onDidChangeModelContent(() => {
        const value = monacoInstanceRef.current?.getValue() || "";
        setCode(value);
      });
    }

    return () => monacoInstanceRef.current?.dispose();
  }, []);

  const runCode = () => {
    try {
      // Transpile TypeScript code into JavaScript
      const transpiledCode = ts.transpile(code);
      // Run the JavaScript code
      const res = eval(transpiledCode);
      console.log('res', { res })
    } catch (error) {
      console.error("Error executing code:", error);
    }
  };

  return (
    <Stack
      ref={editorRef}
      sx={{ backgroundColor: "black", minHeight: '100vh', width: "100%" }}
    />
  );
};
