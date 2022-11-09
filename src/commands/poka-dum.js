import { SlashCommandBuilder } from '@discordjs/builders';

const pokadumCommand = new SlashCommandBuilder()
    .setName('pokadum')
    .setDescription('How dum is the user you tagged')
    .addUserOption((option) => 
        option
            .setName('user')
            .setDescription('Tag a user')
            .setRequired(true)
    );

export default pokadumCommand.toJSON();