const logger = require('../utils/logger');

let eventController;
let botName;
let client;

/**
 * Set the event controller and bot name.
 * @param {Object} controller - The event controller object.
 * @param {Object} dsClient - The instance client of the bot.
 */
function setEventController(controller, dsClient) {
    eventController = controller;
    client = dsClient;
    botName = dsClient.user.username;
}

/**
 * Handle the bot's ready event.
 */
function handleReady() {
    try {
        logger.info(`Bot connected to: ${botName}`);
        eventController.handleReady();
        logger.info(`====================\n`);
    } catch (error) {
        logger.error(`Error handling ready event:`, error);
    }
}

/**
 * Handle the bot's disconnect event.
 */
function handleDisconnect() {
    try {
        logger.info(`Bot disconnected: ${botName}`);
        eventController.handleDisconnect();
    } catch (error) {
        logger.error(`Error handling disconnect event:`, error);
    }
}

module.exports = {
    setEventController,
    handleReady,
    handleDisconnect,
};
