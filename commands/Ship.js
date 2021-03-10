const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'ship',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;
      // if (user.id !== "619993314522824733") return message.channel.send("💖 Score: 100% 💖")
       //shaffer is a cutie 💖
        if (!user) return message.channel.send("User couldn't be found!");
        
        const ship = Math.random() * 100;
        const shipIndex = Math.floor(ship / 1);
        
        let henEmbed = new Discord.RichEmbed()
                    .setColor("#f096ea")
                    .setAuthor(message.author.username + "💖" + user.username)
                    .addField("Score:", shipIndex + "%")
                    .setFooter("Powered By Cat");
                message.channel.send(henEmbed);
    }
};