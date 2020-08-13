module.exports = {
    name: 'rusherhack',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let bUser = message.author;

        // message.guild.member(bUser).ban("rekt rusherhack user!!!");
        message.author.send("lol rekt but heres a code what you can use: beaner");
		message.channel.send(bUser.author.username + " Just tried to buy rusherhack!");
    }
};
