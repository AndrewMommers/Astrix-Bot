module.exports = {
    name: 'rules',
    description: "Embeds!", 
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#680000')
        .setTitle('Rules')
        .addFields(
            {name: '1', value: 'All Disord Terms of Service Apply - https://discordapp.com/terms',},
            {name: '2', value: 'No Harrasment of anykind.'},
            {name: '3', value: 'No Spamming.'},
            {name: '4', value: 'Self promotion such as twitch, youtube, ect. is allowed in #self-promotion. However, Discord servers and other communites are not allowed.'},
            {name: '5', value: 'Follow the directions of Saff Members.'},
            {name: '6', value: 'NSFW is **NOT** permitted anywhere in this discord.'},
            {name: '7', value: 'Keep religion and politics to a minimum.'},
            {name: '8', value: 'Do not harass, abuse, threaten others, or collect, or attempt to collect, personal information about users or without their consent.'},
            {name: '9', value: 'Political speech must remain civil, Hate speech of any kind is forbidden.'},
            {name: '10', value: 'Avoid contacting Staff Directly, unless necessary. Please submit Support Tickets in #support-ticket.'},
            {name: '11', value: 'Takling back to staff will result in a 30 minute ban.'}
        )
        .setFooter('Make sure to check out the information channel');

        message.channel.send (newEmbed);
    }

}