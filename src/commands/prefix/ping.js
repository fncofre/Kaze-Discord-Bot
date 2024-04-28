const logger = require('../../utils/logger');

module.exports = {
    name: 'ping',
    execute: async (message, args) => {
        try {
            message.channel.send('Pong!');
        } catch (error) {
            logger.error('Error executing command:', error);
            message.channel.send(
                'An error occurred while executing the command.'
            );
        }
    },
};
