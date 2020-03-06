module.exports = {
    name: 'say',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        if (message.member.id !== "602307650650374165") return message.channel.send("Sorry, but you aren't Jamie!!");
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    }
};