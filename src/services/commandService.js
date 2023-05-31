const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');

const commandsPath = path.join(__dirname, '../commands');

class CommandService {
    constructor() {
        this.commands = new Map();
    }

    /**
     * Loads the commands from the "commands" folder.
     */
    loadCommands() {
        logger.info("====================")
        logger.info("Loading commands ...")

        const commandFiles = fs
            .readdirSync(commandsPath)
            .filter((file) => file.endsWith('.js'));

        for (const file of commandFiles) {
            const commandFilePath = path.join(commandsPath, file);
            const command = require(commandFilePath);

            if (command.name && command.execute) {
                this.commands.set(command.name, command);
                logger.info(`Loaded command: ${command.name}`);
            } else {
                logger.warn(`Invalid command file: ${commandFilePath}`);
            }
        }

        logger.info(`Loaded ${this.commands.size} commands.`);
        logger.info("====================")
    }

    /**
     * Executes a specific command.
     * @param {string} commandName - The name of the command.
     * @param {Object} message - The received message object.
     * @param {Array} args - The command arguments.
     */
    executeCommand(commandName, message, args) {
        const command = this.commands.get(commandName.toLowerCase());

        if (!command) {
            logger.warn(`Command '${commandName}' not found.`);
            return;
        }

        try {
            command.execute(message, args);
        } catch (error) {
            logger.error(`Error executing command '${commandName}':`, error);
        }
    }
}

module.exports = new CommandService();
