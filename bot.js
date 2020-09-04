const Discord = require('discord.js');
const { Token, Prefix, Streaming, Activity } = require('./settings'); // Pull the Token, Prefix and Streaming boolean from the settings.json file.
const fs = require('fs');

const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection(); // Store the commands.

const commandsFolder = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // Gets all the files ending with .js in the commands folder.

// Loads all commands located in the commands folder.
for (const cmd of commandsFolder) {
    const command = require('./commands/' + cmd);
    bot.commands.set(command.name, command);
}

bot.once('ready', async() => {
    console.log(`Bot is ready! ${bot.user.username}`);

    if (Streaming) {
        await bot.user.setActivity(Activity);
        await bot.user.setStatus("online");
    }

    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch (e) {
        console.log(e.stack);
    }
});

bot.on("guildMemberAdd", function(message) {
    let member = message;

    const embed = new Discord.RichEmbed()
        .setColor("#f096ea")
        .setAuthor("Welcome " + member.user.username + "#" + member.user.discriminator)
        .setDescription(member.user.username + " Has Joined " + message.guild.name)
        .setThumbnail(member.user.avatarURL)
        .addField("Cat's Info", "Type %help")
        .setFooter("Powered By Cat");
    member.guild.channels.find("name", "welcome").send({ embed: embed });
});

bot.on('message', message => {
    if (!message.content.startsWith(Prefix) || message.author.bot) return; // Does nothing if there is no prefix in the message or its a bot.

    const args = message.content.slice(Prefix.length).split(/ +/); // Parses arguments from the command.
    const cmdName = args.shift().toLowerCase(); // The actual command name.

    if (!bot.commands.has(cmdName)) return; // If the command does not exist, do nothing.

    const command = bot.commands.get(cmdName); // Get the command.

    if (command.guildOnly && message.channel.type !== 'text') return message.channel.send('This command is for servers only.'); // The command the user runs will not work and instead return this message if the command is guildOnly.

    if (command.nsfw && !message.channel.nsfw) return message.channel.send("This channel isn't NSFW checked, please go to a NSFW channel or mark the channel as NSFW"); // The command the user runs will not work and instead return this message if the command is nsfw.

    try {
        command.execute(bot, message, args); // Actually run the command because it exists.
    } catch (e) {
        console.log(e);
        message.channel.send('There was an error trying to execute that command.');
    }
});

bot.on('error', error => {
    console.log(error); // This will log the error to console and stop the bot crashing once an error happens.
});

process.on('unhandledRejection', rejection => {
    console.log(rejection); // This will log all other errors to console and stop the bot crashing once an error happens.
});

bot.login(Token);
