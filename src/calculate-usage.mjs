import { retrieveFileContents } from './util/retrieve-file-contents.mjs';

const tokenUsage = (fileContents, tokenName) => {
  return fileContents.reduce(
    (total, current) => total + current.output.usage[tokenName],
    0
  );
};

const calculateTotalUsage = () => {
  const fileContents = retrieveFileContents();

  const promptTokensUsed = tokenUsage(fileContents, "prompt_tokens");
  const completionTokensUsed = tokenUsage(fileContents, "completion_tokens");
  const totalTokensUsed = tokenUsage(fileContents, "total_tokens");

  return {
    promptTokensUsed,
    completionTokensUsed,
    totalTokensUsed,
  };
};

const result = calculateTotalUsage();
console.log(result);