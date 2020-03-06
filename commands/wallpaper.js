const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'wallpaper',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("User couldn't be found!");

        request({ url: "https://nekos.life/api/v2/img/wallpaper", json: true }, function(error, response, body) {
                let henEmbed = new Discord.RichEmbed()
                    .setColor("#FF00FF")
                    .setAuthor("Wallpapers!")
                    .setImage(body.url)
                    .setFooter("Powered By Ai Hayasaka");
                message.channel.send(henEmbed);
            }
        );

    }
};