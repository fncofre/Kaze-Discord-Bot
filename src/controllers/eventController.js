const logger = require('../utils/logger');

/**
 * Handle the bot's ready event.
 */
function handleReady() {
    logger.info('The bot is ready.');
    // Add any additional logic you want to execute when the bot is ready
}

/**
 * Handle the bot's disconnect event.
 */
function handleDisconnect() {
    logger.info('The bot has disconnected.');
    // Add any additional logic you want to execute when the bot disconnects
}

module.exports = {
    handleReady,
    handleDisconnect,
};
