const logger = require('../utils/logger');
const interactionService = require('../services/interactionService');
const { CommandInteraction } = require('discord.js');

const interactionController = {
    /**
     * Execute a command.
     * @param {string} commandName - The name of the command.
     * @param {CommandInteraction} interaction - The interaction object.
     */
    executeCommand: async (commandName, interaction) => {
        try {
            await interactionService.executeCommand(commandName, interaction);
        } catch (error) {
            logger.error(`Error executing command '${commandName}':`, error);
            interaction.reply(
                `An error occurred while executing command '${commandName}'.`
            );
        }
    },
};

module.exports = interactionController;