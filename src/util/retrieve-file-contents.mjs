import fs from 'fs';

export const retrieveFileContents = () => {
  const usageFiles = fs.readdirSync('db');
  return usageFiles.map((file) => JSON.parse(fs.readFileSync(`db/${file}`)));
}