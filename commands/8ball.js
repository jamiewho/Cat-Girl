const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: '8ball',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const sayMessage = args.join(" ");

        request({ url: "https://nekos.life/api/v2/8ball", json: true }, function(error, response, body) {
            let henEmbed = new Discord.RichEmbed()
                .setColor("#FF00FF")
                .setAuthor("8Ball Question: " + sayMessage)
                .setImage(body.url)
                .setFooter("Powered By Ai Hayasaka");
            message.channel.send(henEmbed);
        });
    }
};