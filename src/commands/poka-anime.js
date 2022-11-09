import { SlashCommandBuilder } from '@discordjs/builders';

const pokaanimeCommand = new SlashCommandBuilder()
        .setName('pokaanime')
        .setDescription('Get a random anime I\'ve watched')
        .addStringOption((option) => 
            option
                .setName('animegenre')
                .setDescription('Select the genre')
                .setRequired(true)
                .setChoices({
                    name: 'Shoujo',
                    value: 'shoujo'
                }, {
                    name: 'Shounen',
                    value: 'shounen'
                }, {
                    name: 'Josei',
                    value: 'josei'
                })
        )
        .addStringOption((option) =>
            option
                .setName('animeera')
                .setDescription('Select which era')
                .setRequired(true)
                .setChoices({
                    name: 'Very old',
                    value: 'very old'
                }, {
                    name: 'Not that old, but still old',
                    value: 'not that old'
                }, {
                    name: 'Golden era of animes',
                    value: 'from the golden era'
                }, {
                    name: 'For the zoomers',
                    value: 'for zoomers'
                })
        );

export default pokaanimeCommand.toJSON();