module.exports = {
    name: 'rusherhack',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        if (message.member.id !== "605843924657111082") return message.channel.send("Command is **disabled** currently rn!!");
        let bUser = message.author;

        message.guild.member(bUser).ban("rekt rusherhack user!!!");
        message.author.send("lol rekt but heres a code what you can use: beaner");
    }
};