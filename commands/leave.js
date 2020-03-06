module.exports = {
    name: 'leave',
    description: 'Some command description here.',
    guildOnly: true,
    nsfw: false,

    execute(bot, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have `Admin` as a permission!");
        message.member.voiceChannel.leave();
        message.channel.send("Good Bye :wave:");
    }
};