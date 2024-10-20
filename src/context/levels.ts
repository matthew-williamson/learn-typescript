/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext } from "react";

export interface Level {
  level: number;
  title: string;
  category: string;
  instructions: string;
  initialEditor: string;
  validate: (output: any) => string | undefined;
  hints?: string[];
}

export const levelOne: Level = {
  level: 1,
  title: "Create a Character",
  category: "String Constants",
  validate: (output) => {
    try {
      if (typeof output.name !== "string") {
        return "Name must be a string";
      }
      if (output.name) {
        return "Missing a name!";
      }
      if (output.name.toUpperCase() === "UNKNOWN") {
        return "Name must not be UNKNOWN";
      }
    } catch (e) {
      return "Unknown error has occurred, please check your code and try again!";
    }
  },
  instructions: `Welcome, UNKNOWN! Uhm... Wait, what is your name anyways?
        \n ---
        \nIn the editor to the right, we have declared an interface called \`Character\` and a function called \`createCharacter\` that is supposed to return an object of type \`Character\`. Then we call \`createCharacter\` in order to... well... create your character!
        \nYour task is to replace "UNKNOWN" with your character's name.
        \n ---
        \nMake sure the \`createCharacter\` function returns an \`object\` of type \`Character\`.
        `,
  initialEditor: `interface Character {
    name: string;
}

const createCharacter = (): Character => {
    // Rename your character here!
    const character = {
        name: 'UNKNOWN'
    };
    
    return character;
}

createCharacter();`,
};

export const levels: Level[] = [levelOne];

export const LevelContext = createContext({
  currentLevel: levelOne,
  setCurrentLevel: (level: Level) => {},
  code: "",
  setCode: (code: string) => {},
  runCode: () => {},
});
