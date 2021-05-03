module.exports = {
    name: 'commgl',
    description: "Embeds!", 
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#680000')
        .setTitle('Community Guidlines')
        .addFields(
            {name: '1', value: 'All Discord Community Guidlines Apply - https://discordapp.com/guidelines'},
            {name: '2', value: 'Drunk & Disorderly behaviour will **NOT** be tolerated.'}
        )
        .setFooter('Make sure to check out the information channel');

        message.channel.send (newEmbed);
    }

}