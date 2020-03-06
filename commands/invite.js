const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setAuthor("Bot Invite")
            .addField("Link:", "Insert your link")
            .setFooter("Powered By Ai Hayasaka; " + " Requested by " + message.author.username);
        message.channel.send(embed);
    }
};