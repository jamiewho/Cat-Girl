const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setAuthor("Commands!")
            .addField("%help-general", "Basic Bot Commands")
            .addField("%help-fun", "Fun Commands")
            .addField("%help-anime", "Nsfw Commands")
            .addField("%help-roleplay", "NSFW Commands :smiling_imp: ")
            .addField("%help-mod", "Useful Mod Commands")
            .addField("%help-audio", "Music...")
            .setFooter("Powered By Ai Hayasaka");
        message.channel.send(embed);
    }
};