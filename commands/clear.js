module.exports = {
    name: 'clear',
    description: 'Some command description here.',
    guildOnly: true,
    nsfw: false,

    execute(bot, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have `Manage_Messages` as a permission! :P");
        if (!args[0]) return message.channel.send("Type a number of how much you wanna clear!");
        message.channel.bulkDelete(args[0]).then(() => {message.channel.send("Cleared messages thanks to Ai Hayasaka!").then(msg => msg.delete(5000));});
    }
};
