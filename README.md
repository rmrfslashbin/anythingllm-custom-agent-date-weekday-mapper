# Date to Weekday Mapper

## Description
The Date to Weekday Mapper is a custom agent skill for AnythingLLM that maps each date of a given month and year to its corresponding weekday. This tool is useful for quickly generating calendars or understanding the day-of-week distribution for any given month.

## Installation
1. Ensure you have AnythingLLM set up and running.
2. Navigate to your AnythingLLM `plugins/agent-skills/` directory.
3. Create a new directory named `date-weekday-mapper`.
4. Copy the following files into the `date-weekday-mapper` directory:
   - `plugin.json`
   - `handler.js`
   - `run.js` (for local testing)

## Usage
Once installed, you can use this skill in your conversations with the AI agent. For example:

User: "What are the weekdays for October 2024?"
Agent: To answer this question, I'll use the Date to Weekday Mapper skill.

@date-weekday-mapper {"year": 2024, "month": 10}

The agent will then return a JSON object mapping each date in October 2024 to its corresponding weekday.

## Local Testing
To test the skill locally:

1. Ensure you have Node.js installed on your system.
2. Open a terminal and navigate to the `date-weekday-mapper` directory.
3. Run the following command:
   ```
   node run.js
   ```
4. The script will execute the skill with sample inputs and display the results.

## Files
- `plugin.json`: Contains the configuration for the custom agent skill.
- `handler.js`: Contains the main logic for mapping dates to weekdays.
- `run.js`: A script for local testing of the skill.

## Customization
You can modify the `handler.js` file to add more functionality or change the output format. Remember to update the `plugin.json` file if you make significant changes to the input parameters or skill description.

## Contributing
Feel free to fork this project and submit pull requests with improvements or bug fixes. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the LICENSE file for details.