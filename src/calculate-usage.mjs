import { retrieveFileContents } from './util/retrieve-file-contents.mjs';

const calculateTotalUsage = () => {
  const fileContents = retrieveFileContents();
  const promptTokensUsed = fileContents.reduce((total, current) => total + current.prompt_tokens, 0);
  const completionTokensUsed = fileContents.reduce((total, current) => total + current.completion_tokens, 0);
  const totalTokensUsed = fileContents.reduce((total, current) => total + current.total_tokens, 0);

  return {
      promptTokensUsed,
      completionTokensUsed,
      totalTokensUsed
  };
}

const result = calculateTotalUsage();
console.log(result);