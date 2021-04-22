'use strict';

require('dotenv').config();
const { Client, Message, Guild, WebhookClient, MessageEmbed, GuildMember, DiscordAPIError, Collection} = require('discord.js');
const client = new Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER'] });

const PREFIX = process.env.PREFIX;
const fs = require('fs');

console.log('Authenticating Token!');
client.login (process.env.BOT_TOKEN);
    console.log(process.env.BOT_TOKEN);
console.log('Token has been accepted!');

console.log('Bot is now Starting!');

client.on('ready', async() => {
    console.log(`${client.user.tag} Has Successfully Started!`);
    client.user.setActivity(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Demons`, {type: 'WATCHING' });
})

client.on('guildMemberAdd', member => {
    const welcome = member.guild.channels.cache.get(ch => ch.id ==='818816767610454046')
    var role = member.guild.roles.cache.get(role => role.id === '818816731816263720')
    member.roles.add(role)
    let Embed = new MessageEmbed()
        .setColor('#00a6ff')
        .setDescription(`${member}, Welcome to Andrews Crew! Hope you enjoy your stay!`)
        .setTimestamp();
    welcome.send(Embed);
});