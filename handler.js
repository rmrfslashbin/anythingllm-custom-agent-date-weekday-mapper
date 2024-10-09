// File: handler.js
module.exports.runtime = {
    handler: async function ({ year, month }) {
        try {
            this.introspect(`Mapping dates to weekdays for ${year}-${month}`);

            const result = {
                year: year,
                month: month,
                days: {}
            };
            const daysInMonth = new Date(year, month, 0).getDate();
            const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(year, month - 1, day);
                result.days[day] = weekdays[date.getDay()];
            }

            return JSON.stringify(result, null, 2);
        } catch (e) {
            this.introspect(`Failed to map dates to weekdays: ${e.message}`);
            this.logger(`Error in date-weekday-mapper: ${e.message}`);
            return `The tool failed to run. Error: ${e.message}`;
        }
    }
};