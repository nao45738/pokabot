import { SlashCommandBuilder } from '@discordjs/builders';

const pokabearCommand = new SlashCommandBuilder()
    .setName('pokabear')
    .setDescription('My name is [?] bear.')
    .addStringOption((option) => 
        option
            .setName('describebear')
            .setDescription('Describe bear')
            .setRequired(true)
            .setChoices({
                name: 'Mr. Bear',
                value: 'Mr. Bear'
            }, {
                name: 'Lord Bear',
                value: 'Lord Bear'
            })
    )
    .addStringOption((option) => 
        option
            .setName('petbear')
            .setDescription('Pet bear')
            .setRequired(true)
            .setChoices({
                name: 'Head',
                value: 'head'
            }, {
                name: 'Butt',
                value: 'butt'
            })
    );

export default pokabearCommand.toJSON();

// const pokabearCommand =  {
//     name: 'pokabear',
//     description: 'My name is [?] bear',
//     options: [ 
//         {
//             name: 'describebear',
//             description: 'Describe bear',
//             type: 3,
//             required: true,
//             choices: [
//                 {
//                     name: 'Mr. Bear',
//                     value: 'Mr. Bear'
//                 },
//                 {
//                     name: 'Lord Bear',
//                     value: 'Lord Bear'
//                 }
//             ],
//         },
//         {
//             name: 'petbear',
//             description: 'Pet bear',
//             type: 3,
//             required: true,
//             choices: [
//                 {
//                     name: 'Head',
//                     value: 'head'
//                 },
//                 {
//                     name: 'Butt',
//                     value: 'butt'
//                 },
//             ],
//         },
//     ],
// }
