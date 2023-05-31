const { Client, GatewayIntentBits } = require('discord.js');
const commandController = require('./controllers/commandController');
const eventController = require('./controllers/eventController');
const commandHandler = require('./handlers/commandHandler');
const eventHandler = require('./handlers/eventHandler');
const commandService = require('./services/commandService');
const logger = require('./utils/logger');

// Set the event controller and bot name
const token = process.env.DS_BOT_TOKEN;

// Create a new Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

// Load commands
commandService.loadCommands();

// Handle incoming commands
client.on('messageCreate', (message) => {
    commandHandler.handleCommand(message);
});

// Handle the ready event
client.once('ready', () => {
    // Set up event and command handlers
    eventHandler.setEventController(eventController, client);
    commandHandler.setCommandController(commandController, client);

    eventHandler.handleReady();
});

// Login and start the bot
client
    .login(token)
    .then(() => {
        logger.info('Bot logged in successfully.');
    })
    .catch((error) => {
        logger.error('Error occurred while logging in:', error);
    });
