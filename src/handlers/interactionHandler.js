const { CommandInteraction } = require('discord.js');
const logger = require('../utils/logger');

let commandController;
let client;

/**
 * Set the command controller and client.
 * @param {Object} controller - The command controller object.
 * @param {Object} dsClient - The instance client of the bot.
 */
function setInteractionController(controller, dsClient) {
    commandController = controller;
    client = dsClient;
}

/**
 * Handle incoming interactions.
 * @param {CommandInteraction} interaction - The incoming interaction object.
 */
async function handleInteraction(interaction) {
    try {
        if (!interaction.isChatInputCommand()) {
            return;
        }

        const command = interaction.commandName;
        await commandController.executeCommand(command, interaction);
    } catch (error) {
        logger.error(`Error handling interaction:`, error);
        interaction.reply('An error occurred while processing the command.');
    }
}

module.exports = {
    setInteractionController,
    handleInteraction,
};