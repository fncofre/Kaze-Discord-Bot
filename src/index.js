const { Client, GatewayIntentBits } = require('discord.js');
const commandController = require('./controllers/commandController');
const eventController = require('./controllers/eventController');
const commandHandler = require('./handlers/commandHandler');
const eventHandler = require('./handlers/eventHandler');
const interactionHandle = require('./handlers/interactionHandler');
const commandService = require('./services/commandService');
const interactionService = require('./services/interactionService');
const logger = require('./utils/logger');
const interactionController = require('./controllers/interactionController');

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

// Load slash commands
interactionService.loadCommands();

// Handle incoming interactions
client.on('interactionCreate', async (interaction) => {
    interactionHandle.handleInteraction(interaction);
});

// Handle the ready event
client.once('ready', () => {
    // Set up event and command handlers
    eventHandler.setEventController(eventController, client);
    commandHandler.setCommandController(commandController, client);
    interactionHandle.setInteractionController(interactionController, client);

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
