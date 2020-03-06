module.exports = {
    name: 'mute',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    async execute(bot, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have `Manage_Messages` as a permission!");
        let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!mUser) return message.channel.send("Couldn't find user to mute!");
        let muterole = message.guild.roles.find("name", "muted");
        if (!muterole) {
            try {
                muterole = await message.guild.createRole({name: "muted", color: "#FF00FF", permissions: []});
                message.guild.channels.forEach(async (channel, id) => {await channel.overwritePermissions(muterole, {SEND_MESSAGES: false, ADD_REACTIONS: false});});
            } catch (e) {
                console.log(e.stack);
            }
        }

        await mUser.addRole(muterole.id);
        await message.reply("User has been muted!");
    }
};
