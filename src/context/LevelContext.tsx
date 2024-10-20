/* eslint-disable @typescript-eslint/no-unused-vars */
import ts from "typescript";

import { PropsWithChildren, useCallback, useState } from "react";
import { LevelContext, levelOne } from "./levels";

export const LevelContextProvider = ({ children }: PropsWithChildren) => {
  const [currentLevel, setCurrentLevel] = useState(levelOne);
  const [code, setCode] = useState("");

  const runCode = useCallback(() => {
    try {
      const transpiledCode = ts.transpile(code);
      const output = eval(transpiledCode);
      const maybeError = currentLevel.validate(output);
      if (maybeError) {
        console.log(maybeError);
        return;
      }

      console.log("SUCCESS");
    } catch (error) {
      console.error("Error executing code:", error);
    }
  }, [currentLevel, code]);

  return (
    <LevelContext.Provider
      value={{ currentLevel, setCurrentLevel, code, setCode, runCode }}
    >
      {children}
    </LevelContext.Provider>
  );
};
