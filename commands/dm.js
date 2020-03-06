module.exports = {
    name: 'dm',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        if (message.member.id !== "602307650650374165") return message.channel.send("Sorry, but you aren't Jamie!!");
        const user = message.mentions.users.first() || message.author;
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => {});

        user.send(message.author.username + "#" + message.author.discriminator + " has messaged you from " + message.guild.name + " with, " + sayMessage
        );
    }
};