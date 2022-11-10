import { SlashCommandBuilder } from '@discordjs/builders';

const pokaquotechannelCommand = new SlashCommandBuilder()
    .setName('pokaquotechannel')
    .setDescription('For things related to the quote channel(s)')
    .addSubcommand((subcommand) => 
        subcommand
            .setName('set')
            .setDescription('Set a channel as a quote channel')
            .addChannelOption((option) => {
                return option
                    .setName('channel')
                    .setDescription('channel to be added as a quote channel')
            })
    )
    .addSubcommand((subcommand) => 
    subcommand
        .setName('remove')
        .setDescription('Changes back a channel to a normal one')
        .addChannelOption((option) => {
            return option
                .setName('channel')
                .setDescription('channel to be added as a quote channel')
        })
);

export default pokaquotechannelCommand.toJSON();