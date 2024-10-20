import inquirer from 'inquirer';
import { execute } from './create-prompt.mjs';
import exec from "child_process";

const questions = [
  {
    type: "input",
    name: "personality",
    message: "What personality do you want the AI to have?",
  },
  {
    type: "input",
    name: "aiPrompt",
    message: "What prompt do you want to give the AI?",
  },
  {
    type: "list",
    message: "What type of output do you want?",
    name: "outputType",
    choices: ["HTML", "Markdown", "Console"],
  },
];

const promptResults = await inquirer.prompt(questions);


const input = {
  personality: promptResults.personality,
  aiPrompt: promptResults.aiPrompt,
  outputType: promptResults.outputType,
};

const result = await execute(input);

if (promptResults.outputType === "Console") {
  console.log(result);
} else {
  exec.execSync(`open output/${result}`, { stdio: "inherit" });
}