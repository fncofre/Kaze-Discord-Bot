const { SlashCommandBuilder, CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    /**
     * This command will reply with "Pong!"
     * @param {CommandInteraction} interaction - The interaction object
     */
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
