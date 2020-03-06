const Discord = require('discord.js');

module.exports = {
    name: 'about',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setAuthor("Bot Info")
            .addField("Version", "b5")
            .addField("Creator", "♡Jamie♡#7381")
            .addField("Language", "Discord.JS")
            .addField("Creation Date", "8/4/2019")
            .setFooter("Powered By Ai Hayasaka");
        message.channel.send(embed);
    }
};