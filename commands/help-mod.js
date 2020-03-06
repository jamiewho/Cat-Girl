const Discord = require('discord.js');

module.exports = {
    name: 'help-mod',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setAuthor("Mod Commands!")
            .addField("%ban", "Bans the User")
            .addField("%kick", "Kicks the User")
            .addField("%mute", "Mutes the User")
            .addField("%clear", "Clears the chat")
            .setFooter("Powered By Ai Hayasaka");

        message.channel.send(embed);
    }
};