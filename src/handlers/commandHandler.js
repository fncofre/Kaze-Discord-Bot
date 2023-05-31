const prefixConfig = require('../config/prefixConfig.json');
const logger = require('../utils/logger');

let commandController;
let client;

/**
 * Set the command controller and client.
 * @param {Object} controller - The command controller object.
 * @param {Object} dsClient - The instance client of the bot.
 */
function setCommandController(controller, dsClient) {
    commandController = controller;
    client = dsClient;
}

/**
 * Handle incoming commands.
 * @param {Object} message - The incoming message object.
 */
async function handleCommand(message) {
    try {
        if (message.author.id === client.user.id) {
            return;
        }

        const serverId = message.guild.id;
        const prefix =
            prefixConfig.prefixes[serverId] || prefixConfig.defaultPrefix;
        if (message.content.startsWith(prefix)) {
            const commandBody = message.content.slice(prefix.length);
            const args = commandBody.trim().split(/ +/);
            const command = args.shift().toLowerCase();
            await commandController.executeCommand(command, message, args);
        }
    } catch (error) {
        logger.error(`Error handling command:`, error);
        message.channel.send('An error occurred while processing the command.');
    }
}

module.exports = {
    setCommandController,
    handleCommand,
};
