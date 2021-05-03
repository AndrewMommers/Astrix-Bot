module.exports = {
    name: 'staff-commands',
    description: "Shows Bot Command for Staff", 
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#680000')
        .setTitle('Commands')
        .addFields(
            {name: '!ts', value: 'Link the Teamspeak IP'},
            {name: '!website / web', value: 'Links the Website'},
            {name: '!forums', value: 'The Forums are Currently In-Development'},
            {name: '!info', value: 'display Server Info'},
            {name: '!server-status', value: 'diplays server status'},
            {name: '!ts-status', value: 'display ts status'},
            {name: '!rules', value: 'displays rules'},
            {name: '!commgl', value: 'displays community guildlines'},
            {name: '!purge', value: 'purges msg'},
            {name: '!arma3', value: 'displays arma3 status'}
        )

        message.channel.send (newEmbed);
    }

}