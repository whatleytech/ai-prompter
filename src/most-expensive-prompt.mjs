import { retrieveFileContents } from './util/retrieve-file-contents.mjs';

const mostExpensivePrompt = () => {
  const fileContents = retrieveFileContents();

  return fileContents.reduce((mostExpensive, current) => {
    if (current.prompt_tokens > mostExpensive.prompt_tokens) {
      return current;
    }
    return mostExpensive;
  });
}

const result = mostExpensivePrompt();
console.log(result);