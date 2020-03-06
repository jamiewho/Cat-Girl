module.exports = {
    name: 'walk',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        if (message.member.id !== "465655362700181534") return message.channel.send("Walking permission **DENIED**");
        message.channel.send("Walking permission **granted**!!");
    }
};