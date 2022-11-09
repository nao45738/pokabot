import { SlashCommandBuilder } from '@discordjs/builders';

const pokaaddroleCommand = new SlashCommandBuilder()
    .setName('pokaaddrole')
    .setDescription('Add a role')
    .addRoleOption((option) => 
        option
            .setName('newrole')
            .setDescription('Adds the new role')
            .setRequired(true)
    );

export default pokaaddroleCommand.toJSON();