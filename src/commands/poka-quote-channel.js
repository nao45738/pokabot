import { SlashCommandBuilder } from '@discordjs/builders';

const pokaquotechannelCommand = new SlashCommandBuilder()
    .setName('pokaquotechannel')
    .setDescription('For things related to the quote channel(s)')
    .addSubcommand((subcommand) => 
        subcommand
            .setName('set')
            .setDescription('Sets a channel as a quote channel')
            .addChannelOption((option) => {
                return option
                    .setName('channel')
                    .setDescription('channel to be added as a quote channel')
            })
    )
    .addSubcommand((subcommand) => 
        subcommand
            .setName('remove')
            .setDescription('Changes back a quote channel to a normal one')
            .addChannelOption((option) => {
                return option
                    .setName('channel')
                    .setDescription('channel to be added as a quote channel')
            })
    )
    .addSubcommand((subcommand) => 
        subcommand
            .setName('list')
            .setDescription('Lists all the quote channels')
    );

export default pokaquotechannelCommand.toJSON();