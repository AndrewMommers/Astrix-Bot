module.exports = {
    name: 'info',
    description: "Shows Information", 
    execute(message, args, Discord, DiscordMessageEmbed) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#680000')
        .setTitle('Information')
        .addFields(
            {name: 'Website', value: 'In-Development'},
            {name: 'Forums', value: 'In-Development'},
            {name: 'Discord Invite', value: 'https://discord.gg/G9KvpjyJJd'},
            {name: 'Development Trello', value: 'https://trello.com/b/Y3aPmEmx/arma-3-projects-tassie-public-trello'},
            {name: 'Staff Roster', value: 'TBA'}
        )
        .setFooter('If you have any problems please make a support ticket!');

        message.channel.send (newEmbed);
    }

}