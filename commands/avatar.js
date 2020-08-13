const Discord = require('discord.js');

module.exports = {
    name: 'avatar', // The name of the command. So this would be %avatar
    description: 'Some command description here.', // Description of the command.
    guildOnly: false, // Should the command only work in guilds?
    nsfw: false, // Should the command only work in NSFW marked channels?

    execute(bot, message, args) {
        const user = message.mentions.users.first() || message.author;

        const avatarEmbed = new Discord.RichEmbed()
            .setColor("#f096ea")
            .setAuthor(user.username + "#" + user.discriminator + "'s " + " Avatar!")
            .setImage(user.avatarURL)
            .setFooter("Powered By Cat");
        message.channel.send(avatarEmbed);
    }
};