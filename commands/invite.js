const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#f096ea")
            .setAuthor("Bot Invite")
            .addField("Link:", "[Link](https://discordapp.com/oauth2/authorize?client_id=637680631916003349&permissions=8&scope=bot)")
            .setFooter("Powered By Cat; " + " Requested by " + message.author.username);
        message.channel.send(embed);
    }
};
