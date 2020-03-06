const Discord = require('discord.js');

module.exports = {
    name: 'help-roleplay',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setAuthor("Roleplay Commands!")
            .addField("%blowjob", "blowjobs")
            .addField("%cum", "cum in me uwu")
            .addField("%blowjob", "suck dick")
            .addField("%boob", "boob play")
            .addField("%anal", "anal.")
            .addField("%kiss", "y")
            .addField("%cuddle", "y")
            .addField("%hug", "y")
            .setFooter("Powered By Ai Hayasaka");
        message.channel.send(embed);
    }
};