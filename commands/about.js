const Discord = require('discord.js');

module.exports = {
    name: 'about',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#f096ea")
            .setAuthor("Bot Info")
            .addField("Version", "6.0")
            .addField("Creator", "jamie 𝓵𝓸𝓿𝓮𝓼 𝔂𝓸𝓾#0002")
            .addField("Language", "Discord.JS")
            .addField("Creation Date", "8/4/2019")
            .setFooter("Powered By Cat");
        message.channel.send(embed);
    }
};