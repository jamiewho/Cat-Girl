const Discord = require('discord.js');

module.exports = {
    name: 'server',
    description: 'Some command description here.',
    guildOnly: true,
    nsfw: false,

    execute(bot, message, args) {
        let icon = message.guild.iconURL;
        let embed = new Discord.RichEmbed()
            .setColor("FF00FF")
            .setAuthor(message.guild.name + " Info's")
            .setThumbnail(icon)
            .addField("Name:", message.guild.name)
            .addField("Server ID:", message.guild.id)
            .addField("Members:", message.guild.memberCount)
            .addField("Created:", message.guild.createdAt)
            .addField("Region:", message.guild.region)
            .addField("Owner:", message.guild.owner)
            .addField("Verified:", message.guild.verified)
            .setFooter("Powered By Ai Hayasaka");
        message.channel.send(embed);
    }
};