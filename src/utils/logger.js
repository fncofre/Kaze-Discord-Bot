const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf((info) => {
            const formattedLevel =
                info.level.charAt(0).toUpperCase() + info.level.slice(1);
            return `[${info.timestamp}] ${formattedLevel}: ${info.message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
            filename: './src/utils/logs/%DATE%_logs.log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '20m',
            maxFiles: '7d',
        }),
    ],
});

module.exports = logger;
