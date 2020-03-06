module.exports = {
    name: 'kick',
    description: 'Some command description here.',
    guildOnly: true,
    nsfw: false,

    execute(bot, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have `Kick_Members` as a permission!");
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send("User couldn't be found!");
        let kReason = args.join(" ").slice(22);

        message.guild.member(kUser).kick(kReason);
        message.channel.send(kUser + " **was kicked for** " + kReason);
    }
};