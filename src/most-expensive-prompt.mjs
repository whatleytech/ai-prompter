import { retrieveFileContents } from './util/retrieve-file-contents.mjs';

const mostExpensivePrompt = () => {
  const fileContents = retrieveFileContents();

  if (fileContents.length === 0) {
    return null;
  }

  return fileContents.reduce((mostExpensive, current) => {
    if (
      current.output.usage.prompt_tokens >
      mostExpensive.output.usage.prompt_tokens
    ) {
      return current;
    }
    return mostExpensive;
  });
}

const result = mostExpensivePrompt();
console.log(result);