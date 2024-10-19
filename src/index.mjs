import inquirer from 'inquirer';
import { execute } from './create-prompt.mjs';

const questions = [
  {
    type: 'input',
    name: 'personality',
    message: "What personality do you want the AI to have?",
  },
  {
    type: 'input',
    name: 'aiPrompt',
    message: "What prompt do you want to give the AI?",
  }
];

const promptResults = await inquirer.prompt(questions);


const input = {
    personality: promptResults.personality,
    aiPrompt: promptResults.aiPrompt
}

const result = await execute(input);
console.log(result);