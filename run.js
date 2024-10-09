// File: run.js
const dateWeekdayMapper = require('./handler');

async function main() {
    const context = {
        config: {
            name: 'Date to Weekday Mapper',
            version: '1.0.0'
        },
        introspect: console.log,
        logger: console.error
    };

    const mergedContext = { ...dateWeekdayMapper.runtime, ...context };

    const testCases = [
        { year: 2024, month: 10 },
        { year: 2025, month: 12 }
    ];

    for (const input of testCases) {
        console.log(`\nTesting for ${input.year}-${input.month}:`);
        const result = await dateWeekdayMapper.runtime.handler.call(mergedContext, input);
        console.log(result);
    }
}

main().catch(console.error);