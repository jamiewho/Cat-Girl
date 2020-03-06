const Discord = require('discord.js');

module.exports = {
    name: 'help-anime',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setAuthor("Anime Commands!")
            .addField("%wallpaper", "Wallpapers")
            .addField("%holo", "cuz opal")
            .addField("%lewdnekos", "NSFW")
            .addField("%hentai", "NSFW")
            .addField("%neko", "NEKO")
            .addField("%lewdholo", "cuz opal")
            .addField("%femdom", "fem")
            .addField("%trap", "trap")
            .setFooter("Powered By Ai Hayasaka");

        message.channel.send(embed);
    }
};