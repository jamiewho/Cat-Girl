const Discord = require('discord.js');

module.exports = {
    name: 'help-command',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setAuthor("General Commands!")
            .addField("%about", "Shows bot info")
            .addField("%avatar", "Shows the avatar")
            .addField("%invite", "Gives you the bot invite")
            .addField("%server", "Sends data on the `Server`!")
            .addField("%user", "Sends data on the `User`~!")
            .setFooter("Powered By Ai Hayasaka");
        message.channel.send(embed);
    }
};