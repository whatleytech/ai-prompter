import OpenAI from "openai";
import fs from 'fs';
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';

const openai = new OpenAI();

const promptAI = async (input) => {
  const personality = input?.personality ?? "You are a helpful assistant.";
  const aiPrompt =
    input?.aiPrompt ?? "Describe what it means to live a healthy lifestyle.";

  const result = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: personality },
      {
        role: "user",
        content: aiPrompt,
      },
    ],
  });

  return {
    output: result,
    input: {
      personality,
      aiPrompt,
    },
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

  const fileName = `usage-${records.length + 1}-${date.format(
    "YYYYMMDDHHmmssSSS"
  )}.json`;
  fs.writeFileSync(`db/${fileName}`, JSON.stringify(record));

  return result;
};

export const execute = async (input) =>
  await promptAI(input)
    .then((result) => persistUsage(result))
    .then((result) => result.output.choices[0].message.content);
