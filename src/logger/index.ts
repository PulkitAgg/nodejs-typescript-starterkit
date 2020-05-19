import winston from 'winston';

const { combine, timestamp, printf } = winston.format;

const myFormat = printf(({ timestamp, level, message }) => {
    return `LEVEL: ${level} | TIME - ${timestamp} | MESSAGE - ${JSON.stringify(message)} `;
});

const logger = winston.createLogger({
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.File({ filename: 'appLog.log' }),
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: combine(
            timestamp(),
            myFormat
        ),
    }));
}

export default logger;