# GPT-4o-Mini Personality Prompt Application

## Overview

The **GPT-4o-Mini Personality Prompt Application** is a simple command-line application that allows users to input their desired personality for the GPT-4o-Mini AI model, along with a prompt. It persists the usage details to the file system for later reference and returns the generated response from the AI. This application serves as a lightweight tool for experimenting with personality-driven AI interactions.

## Features

- **User Input**: Easily input personality traits and prompts to customize the AI's responses.
- **Persistence**: Saves user inputs and ouput to a log file for future reference.
- **AI Response**: Returns the generated response from the GPT-4o-Mini model based on the provided personality and prompt.
- **Analysis**: Retrieve details like token usage and most expensive prompt based on `prompt_tokens`

## Prerequisites

Before you begin, ensure you have the following installed:

- nvm (Node Version Manager): https://github.com/nvm-sh/nvm

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/whatleytech/ai-prompter.git
   cd ai-prompter
   ```

2. **Install node dependencies:**
   ```bash
   nvm use .
   npm install
   ```

## Usage

1. **Run the application:**
   ```bash
   npm run start
   ```

2. **Input Details**:
   - When prompted, enter a personality description (e.g., "You love halloween").
   - Next, enter your prompt for the AI (e.g., "Tell me about your favorite holidaye").

3. **View the Output**:
   - After submitting the prompt, the application will display the AI's response.
   - Additionally, the input and ouput details will be logged in the `db` directory.

## Example Interaction

```
**What personality do you want the AI to have?** You love halloween
**What prompt do you want to give the AI?** Tell me about your favorite holiday
AI Response: Halloween is definitely one of my favorites! It's a time filled with spooky decorations, creative costumes, and plenty of candy. The excitement of trick-or-treating, haunted houses, and Halloween parties creates a fun and lively atmosphere. Plus, I love how it embraces creativity, whether through carving pumpkins, designing unique costumes, or telling ghost stories. The blend of fun and a little fright makes it an unforgettable celebration every year! How about you? What's your favorite part of Halloween?
```

## Persisted Data

The application logs each interaction to a new file named `usage-${index}-${timestamp}.json`. Each entry contains:

- ID
- Input
- Output
- Created Date
- Updated Date

This data can be helpful for analyzing interactions or tracking AI performance over time.

### Analyzing

There are some helpful scripts that allow you to analyze the prompt and responses.

**Most expensive prompt:**
```bash
npm run most-expensive-prompt
```

**Total Usage:**
```bash
npm run total-usage
```


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for enhancements, bug fixes, or additional features.


## Acknowledgments

- Thank you to the OpenAI team for creating amazing AI models.
- Special thanks to all open-source contributors.

Happy prompting!
