import { config } from 'dotenv';
import { Client, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import PokaAnimeCommand from './commands/poka-anime.js';
import PokaBearCommand from './commands/poka-bear.js';
import PokaDumCommand from './commands/poka-dum.js';
import PokaQuoteChannelCommand from './commands/poka-quote-channel.js';

config();

const TOKEN = process.env.BOT_TOKEN;

const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const NAO_ID = process.env.NAO_ID;
const HUNNEH_ID = process.env.HUNNEH_ID
const CJ_ID = process.env.CJ_ID;
const PETER_ID = process.env.PETER_ID;
const KEVIN_ID = process.env.KEVIN_ID;
const QUOTE_CHANNEL_ID = process.env.QUOTE_CHANNEL_ID;

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
        console.log(interaction.options.getSubcommand());

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
            interaction.reply({ content: pokadumResponse(interaction.options.getUser('user').id, interaction.options.getUser('user'))});
        }

        if(interaction.commandName === 'pokaquotechannel'){
            if(interaction.options.getSubcommand() === 'set'){

            }else if (interaction.options.getSubcommand() === 'add'){

            }else if (interaction.options.getSubcommand() === 'list'){
                
            }
        }
    }
});

// quote only message in a specific channel
// client.on('messageCreate', (message) => {
//     //console.log(message.type);
//     if(message.channelId === QUOTE_CHANNEL_ID){
//         if(message.content.match(QUOTE_REGEX)){ }
//         else{
//             message.delete();
//             // but does not delete thread if message is thread starter
//             message.author.send("noooooooooo");
//             // TO-DO: explain how to start thread with picture of where to click + on mobile
//         }
//     }
// });

function pokadumResponse(userId, atUser) {

    if(userId === NAO_ID){
        return `${atUser} is a smort cookie <:peepoBlush:1040109437190422619>`
    }else if(userId === HUNNEH_ID){
        return `${atUser} is no dum, only a smart and precious fellow hooman <:peepoPat:959205730177667102> Also deserves everything gud in dis world <:uwu:807290399856918530>`
    }else if(userId === CJ_ID){
        return `${atUser} very dum, not even God can help them <:PepeHands:749493034365878294>`
    }else if(userId === PETER_ID){
        return `${atUser} is eeeeeeh decent smart/dum, but Selen will never notice them <:selenpain:1009278102716829806>`
    }else if(userId === KEVIN_ID){
        return `${atUser} is pretty smart, deserves to get a large sum of money and retire early <:widepeepoHappy:771380408590794803>`
    }else{
        return `${atUser} might or might not be dum, but you know they be a gud fren <:peepoBlonket:806749526667821069>`
    }
}

async function main() {

    //console.log(pokaanimeCommand.toJSON());

    const guildCommands = [
        PokaAnimeCommand,
        PokaQuoteChannelCommand,
    ];

    const globalCommands = [
        PokaBearCommand,
        PokaDumCommand,
    ];

    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: guildCommands,
        });

        // await rest.put(Routes.applicationCommands(CLIENT_ID), {
        //     body: globalCommands,
        // });

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