const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'foxgirl',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("User couldn't be found!");

        request({ url: "https://nekos.life/api/v2/img/fox_girl", json: true }, function(error, response, body) {
                let henEmbed = new Discord.RichEmbed()
                    .setColor("#FF00FF")
                    .setAuthor("fox girls")
                    .setImage(body.url)
                    .setFooter("Powered By Cat");
                message.channel.send(henEmbed);
            }
        );
    }
};
