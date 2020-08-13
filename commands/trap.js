const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'trap',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: true,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("User couldn't be found!");

        request({ url: "https://nekos.life/api/v2/img/trap", json: true }, function(
            error,
            response,
            body
        ) {
            let henEmbed = new Discord.RichEmbed()
                .setColor("#f096ea")
                .setAuthor("Trans Rights")
                .setImage(body.url)
                .setFooter("Powered by Cat");
            message.channel.send(henEmbed);
        });
    }
};