const logger = require('../utils/logger');
const commandService = require('../services/commandService');

const commandController = {
    /**
     * Execute a command.
     * @param {string} commandName - The name of the command.
     * @param {Object} message - The message object.
     * @param {Array} args - The arguments for the command.
     */
    executeCommand: async (commandName, message, args) => {
        try {
            await commandService.executeCommand(commandName, message, args);
        } catch (error) {
            logger.error(`Error executing command '${commandName}':`, error);
            message.channel.send(
                `An error occurred while executing command '${commandName}'.`
            );
        }
    },
};

module.exports = commandController;
