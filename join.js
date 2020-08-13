module.exports = {
    name: 'join',
    description: 'Some command description here.',
    guildOnly: true,
    nsfw: false,

    execute(bot, message, args) {
        message.member.voiceChannel.join();
        message.channel.send("Joining voice...");
    }
};