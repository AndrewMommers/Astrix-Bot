'use strict';

require('dotenv').config();
const { Client, Message, Guild, WebhookClient, MessageEmbed, GuildMember, DiscordAPIError, Collection} = require('discord.js');
const client = new Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER'] });

const PREFIX = process.env.PREFIX;
const fs = require('fs');
const prefix = '!';

client.commands = new Collection();

console.log('Authenticating Token!');
client.login (process.env.BOT_TOKEN);
    console.log(process.env.BOT_TOKEN);
console.log('Token has been accepted!');

console.log('Bot is now Starting!');

client.on('ready', async() => {
    console.log(`${client.user.tag} Has Successfully Started!`);
    client.user.setActivity(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members`, {type: 'WATCHING' });
})

const commandFiles =fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('guildMemberAdd', member => {
    const welcome = member.guild.channels.cache.find(ch => ch.name ==='🚪entrance')
    var role = member.guild.roles.cache.find(role => role.name === 'Demons')
    member.roles.add(role)
    let Embed = new MessageEmbed()
        .setColor('#11ff00')
        .setDescription(`${member} joined the server`)
        .setTimestamp();
    welcome.send(Embed);
});

client.on('guildMemberRemove', member => {
    const welcome = member.guild.channels.cache.find(ch => ch.name ==='🚪entrance')
    var role = member.guild.roles.cache.find(role => role.name === 'Demons')
    member.roles.remove(role)
    let Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setDescription(`${member} left the server`)
        .setTimestamp();
    welcome.send(Embed);
});

/*client.on('messageReactionAdd', (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '788650077732339746') {
        switch (name) {
        case '🗒️':
            member.roles.add('788649618853724190');
        }
    }
});
*/

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'website'){
        client.commands.get('website').execute(message, args);        
        } if (command == 'web'){
            client.commands.get('web').execute(message, args); 
        
        } else {

        } if (command === 'purge') {
            client.commands.get('purge').execute(message, args);
            
        } else {
        
        } if (command === 'rules') {
            client.commands.get('rules').execute(message, args);
            
        } else {

        } if (command === 'commgl') {
            client.commands.get('commgl').execute(message, args);
            
        } else {

        } if (command === 'info') {
            client.commands.get('info').execute(message, args);
            
        } else {
            
        } if (command === 'staff-commands') {
            client.commands.get('staff-commands').execute(message, args);
            
        } else {
    }
})