const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'femdom',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: true,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("User couldn't be found!");

        request(
            { url: "https://nekos.life/api/v2/img/femdom", json: true },
            function(error, response, body) {
                let henEmbed = new Discord.RichEmbed()
                    .setColor("#FF00FF")
                    .setAuthor("Femdom")
                    .setImage(body.url)
                    .setFooter("For anarch <3");
                message.channel.send(henEmbed);
            }
        );
    }
};