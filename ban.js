module.exports = {
    name: 'ban',
    description: 'Some command description here.',
    guildOnly: true,
    nsfw: false,

    execute(bot, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have `Ban_Members` as a permission!");
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!bUser) return message.channel.send("User couldn't be found!");
        let bReason = args.join(" ").slice(22);

        message.guild.member(bUser).ban(bReason);
        message.channel.send(bUser + " **was banned for** " + bReason);
    }
};