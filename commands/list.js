const Discord = require('discord.js');

module.exports = {
    name: 'list',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("FF00FF")
            .setAuthor("The list of servers what the bot is in!")
            .addField("Server Counter:", bot.guilds.size)
            .addField("Servers:", bot.guilds.array().join("\n"))
            .setFooter("Powered By Ai Hayasaka");
        message.channel.send(embed);
    }
};