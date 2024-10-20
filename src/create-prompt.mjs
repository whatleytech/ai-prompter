import OpenAI from "openai";
import fs from 'fs';
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';

const openai = new OpenAI();

const promptAI = async (input) => {
  const personality = input?.personality ?? "You are a helpful assistant.";
  const aiPrompt =
    input?.aiPrompt ?? "Describe what it means to live a healthy lifestyle.";
  const outputType = input?.outputType ?? "HTML";

  let outputTypeDescription = "";
  if (outputType === "HTML") {
    outputTypeDescription =
      "And respond only with HTML page for the result without the code block markdown.";
  } else if (outputType === "Markdown") {
    outputTypeDescription =
      "And respond only with the markdown for the result without the code block markdown..";
  }

  const result = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: personality },
      {
        role: "user",
        content: `${aiPrompt}. ${outputTypeDescription}`,
      },
    ],
  });

  return {
    output: result,
    input,
  };
};

const persistUsage = (result) => {
  fs.mkdirSync("db", { recursive: true });

  const date = dayjs();
  const records = fs.readdirSync("db");

  const record = {
    id: uuidv4(),
    ...result,
    created_at: date.format(),
    updated_at: date.format(),
  };

  const fileName = `record-${records.length + 1}-${date.format(
    "YYYYMMDDHHmmssSSS"
  )}.json`;
  fs.writeFileSync(`db/${fileName}`, JSON.stringify(record));

  return result;
};

const createWebpage = (result) => {
  fs.mkdirSync("output", { recursive: true });

  const date = dayjs();
  const records = fs.readdirSync("output");
  const content = result.output.choices[0].message.content;
  const fileExt = result.input.outputType === "HTML" ? "html" : "md";

  const fileName = `result-${records.length + 1}-${date.format(
    "YYYYMMDDHHmmssSSS"
  )}.${fileExt}`;

  fs.writeFileSync(`output/${fileName}`, content);

  return fileName;
};

export const execute = async (input) =>
  await promptAI(input)
    .then((result) => persistUsage(result))
    .then((result) =>
      result.input.outputType === "Console"
        ? result.output.choices[0].message.content
        : createWebpage(result)
    );
