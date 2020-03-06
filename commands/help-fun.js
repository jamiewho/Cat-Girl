const Discord = require('discord.js');

module.exports = {
    name: 'help-fun',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setAuthor("Fun Commands!")
            .addField("%walk", "command for Dainert")
            .addField("%rusherhack", "john :D")
            .setFooter("Powered By Ai Hayasaka");
        message.channel.send(embed);
    }
};