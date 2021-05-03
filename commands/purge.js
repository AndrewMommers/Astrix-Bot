module.exports = {
    name: 'purge',
    description: "Purges Messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply("please enter the amount of messages that you weant to purge!");
        if(isNaN(args[0])) return message.reply("please enter a real number!");
    
        if(args[0] > 10000) return message.reply("You canno't delete more than 10,000 messages!");
        if(args[0] < 1) return message.reply("You must delete at least one message!");
    
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}