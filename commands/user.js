const Discord = require('discord.js');

module.exports = {
    name: 'user',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("User couldn't be found!");

        let embed = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setAuthor(user.username + "#" + user.discriminator + " Info's")
            .setThumbnail(user.avatarURL)
            .addField("Name:", user.username + "#" + user.discriminator)
            .addField("ID:", user.id)
            .addField("Created", user.createdAt)
            .setFooter("Powered By Ai Hayasaka");
        message.channel.send(embed);
    }
};