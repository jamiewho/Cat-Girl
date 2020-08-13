const Discord = require('discord.js');

module.exports = {
    name: 'help-audio',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setAuthor("Audio Commands!")
            .addField("%join", "Joins voice channel")
            .addField("%leave", "Leaves Voice Channel")
            .setFooter("Powered By Ai Hayasaka");

        message.channel.send(embed);
    }
};