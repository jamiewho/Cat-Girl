const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#f096ea")
            .setAuthor("Commands!")
            .addField("%help-general", "Basic Bot Commands")
            .addField("%help-fun", "Fun Commands")
            .addField("%help-anime", "Nsfw Commands")
            .addField("%help-roleplay", "NSFW Commands :smiling_imp: ")
            .addField("%help-mod", "Useful Mod Commands")
            .addField("%help-audio", "Music...")
            .setFooter("Powered By Cat");
        message.channel.send(embed);
    }
};