import { config } from 'dotenv';
import { Client, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import PokaAnimeCommand from './commands/poka-anime.js';
import PokaBearCommand from './commands/poka-bear.js';
import PokaDumCommand from './commands/poka-dum.js';

config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const NAO_ID = process.env.GUILD_ID;
const QUOTE_REGEX = /"(.|\n)*"( ?\n?- ?)(\S(.|\n)*)/;

const client = new Client({ intents: [
    'Guilds', 
    'GuildMessages',
    'MessageContent'
] });

const rest = new REST({ version: '10' }).setToken(TOKEN);

//console.log(process.env.BOT_TOKEN);

client.on('ready', () => console.log(`${client.user.tag} has logged in`));

client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()) {
        //console.log(interaction.commandName);

        if(interaction.commandName === 'pokabear'){
            //console.log(interaction.options.get('describebear').value);
            //console.log(interaction.options.get('petbear').value);
            const describeBear = interaction.options.get('describebear').value;
            const petBear = interaction.options.get('petbear').value;
            interaction.reply({ content: `My name is ${describeBear} and I like pets on my ${petBear}.` });
        }

        if(interaction.commandName === 'pokaanime'){
            const animeGenre = interaction.options.get('animegenre').value;
            const animeEra = interaction.options.get('animeera').value;
            interaction.reply({ content: `You want a ${animeGenre} that is ${animeEra}.`});
        }

        if(interaction.commandName === 'pokadum'){
            //console.log(interaction.options.getUser('user'));

            if(interaction.options.getUser('user').id === NAO_ID){
                interaction.reply({ content: `hellow`});
            }else{
                interaction.reply({ content: `${interaction.options.getUser('user')} is dumdum.`});
            }
        }
    }
});

// quote only message in a specific channel
client.on('messageCreate', (message) => {
    //console.log(message.type);
    if(message.channelId === '1035712296456036374'){
        if(message.content.match(QUOTE_REGEX)){ }
        else{
            message.delete();
            // but does not delete thread if message is thread starter
            message.author.send("noooooooooo");
            // TO-DO: explain how to start thread with picture of where to click + on mobile
        }
    }
});

async function main() {

    //console.log(pokaanimeCommand.toJSON());

    const guildCommands = [
        PokaAnimeCommand,
        PokaBearCommand,
        PokaDumCommand,
    ];

    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: guildCommands,
        });

        client.login(TOKEN);

    } catch (err) {
        console.log(err);
    }
}

main();

// client.on('messageCreate', (message) => {
//     console.log(message.content);
//     console.log(message.createdAt.toDateString());
//     console.log(message.author.tag);
// });