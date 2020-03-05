const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botsettings.prefix;
const ytdl = require("ytdl-core");
const ms = require("ms");
const fetch = require("node-fetch");
const nekos = require("nekos.life");
const { Client, Collection } = require("discord.js");
const handler = require("d.js-command-handler");
const request = require("request");

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
  console.log(`Bot is ready! ${bot.user.username}`);
  if (botsettings.activity.streaming == true) {
    bot.user.setActivity("Noels Sister - Type %help");
    bot.user.setStatus("online");
  }

  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
  } catch (e) {
    console.log(e.stack);
  }
});

bot.on("guildMemberAdd", function(message) {
  let guild = message.guild;
  let member = message;
  let membercount = bot.users.size;

  const embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setAuthor(
      "Welcome " + member.user.username + "#" + member.user.discriminator
    )
    .setDescription(member.user.username + " Has Joined " + message.guild.name)
    .setThumbnail(member.user.avatarURL)
    .addField("Ai Hayasaka's Info", "Type %help")
    .setFooter("Powered By Ai Hayasaka");

  member.guild.channels.find("name", "welcome").send({ embed: embed });
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dn") return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  if (command === `${prefix}about`) {
    let embed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor("Bot Info")
      .addField("Version", "b5")
      .addField("Creator", "Jamd nickname(jamie) ?#7508")
      .addField("Language", "Discord.JS")
      .addField("Creation Date", "8/4/2019")
      .setFooter("Powered By Ai Hayasaka");

    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}help`) {
    let embed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor("Commands!")
      .addField("%help-general", "Basic Bot Commands")
      .addField("%help-fun", "Fun Commands")
      .addField("%help-anime", "Nsfw Commands")
      .addField("%help-roleplay", "NSFW Commands :smiling_imp: ")
      .addField("%help-mod", "Useful Mod Commands")
      .addField("%help-audio", "Music...")
      .setFooter("Powered By Ai Hayasaka");

    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}help-general`) {
    let embed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor("General Commands!")
      .addField("%about", "Shows bot info")
      .addField("%avatar", "Shows the avatar")
      .addField("%invite", "Gives you the bot invite")
      .addField("%server", "Sends data on the `Server`!")
      .addField("%user", "Sends data on the `User`~!")
      .setFooter("Powered By Ai Hayasaka");

    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}help-fun`) {
    let embed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor("Fun Commands!")
      .addField("%walk", "command for Dainert")
      .addField("%rusherhack", "john :D")
      .setFooter("Powered By Ai Hayasaka");

    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}help-roleplay`) {
    let embed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor("Roleplay Commands!")
      .addField("%blowjob", "blowjobs")
      .addField("%cum", "cum in me uwu")
      .addField("%blowjob", "suck dick")
      .addField("%boob", "boob play")
      .addField("%anal", "anal.")
      .addField("%kiss", "y")
      .addField("%cuddle", "y")
      .addField("%hug", "y")
      .setFooter("Powered By Ai Hayasaka");

    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}help-mod`) {
    let embed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor("Mod Commands!")
      .addField("%ban", "Bans the User")
      .addField("%kick", "Kicks the User")
      .addField("%mute", "Mutes the User")
      .addField("%clear", "Clears the chat")
      .setFooter("Powered By Ai Hayasaka");

    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}help-audio`) {
    let embed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor("Audio Commands!")
      .addField("%join", "Joins voice channel")
      .addField("%leave", "Leaves Voice Channel")
      .setFooter("Powered By Ai Hayasaka");

    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}help-anime`) {
    let embed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor("Anime Commands!")
      .addField("%wallpaper", "Wallpapers")
      .addField("%holo", "cuz opal")
      .addField("%lewdnekos", "NSFW")
      .addField("%hentai", "NSFW")
      .addField("%neko", "NEKO")
      .addField("%lewdholo", "cuz opal")
      .addField("%femdom", "fem")
      .addField("%trap", "trap")
      .setFooter("Powered By Ai Hayasaka");

    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}avatar`) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor(user.username + "#" + user.discriminator + "'s " + " Avatar!")
      .setImage(user.avatarURL)
      .setFooter("Powered By Ai Hayasaka");
    message.channel.send(avatarEmbed);

    return;
  }

  if (command === `${prefix}join`) {
    message.member.voiceChannel.join();
    message.channel.send("Joining voice...");

    return;
  }

  if (command === `${prefix}leave`) {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("You don't have `Admin` as a permission!");
    message.member.voiceChannel.leave();
    message.channel.send("Good Bye :wave:");

    return;
  }

  if (command === `${prefix}clear`) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "You don't have `Manage_Messages` as a permission! :P"
      );
    if (!args[0])
      return message.channel.send("Type a number of how much you wanna clear!");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel
        .send("Cleared messages thanks to Ai Hayasaka!")
        .then(msg => msg.delete(5000));
    });

    return;
  }

  if (command === `${prefix}ban`) {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("You don't have `Ban_Members` as a permission!");
    let bUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!bUser) return message.channel.send("User couldn't be found!");
    let bReason = args.join(" ").slice(22);

    message.guild.member(bUser).ban(bReason);
    message.channel.send(bUser + " **was banned for** " + bReason);

    return;
  }

  if (command === `${prefix}kick`) {
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.reply("You don't have `Kick_Members` as a permission!");
    let kUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!kUser) return message.channel.send("User couldn't be found!");
    let kReason = args.join(" ").slice(22);

    message.guild.member(kUser).kick(kReason);
    message.channel.send(kUser + " **was kicked for** " + kReason);

    return;
  }

  if (command === `${prefix}mute`) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("You don't have `Manage_Messages` as a permission!");
    let mUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!mUser) return message.channel.send("Couldn't find user to mute!");
    let muterole = message.guild.roles.find("name", "muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#FF00FF",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }

    await mUser.addRole(muterole.id);
    message.reply("User has been muted!");

    return;
  }

  if (command === `${prefix}say`) {
    if (message.member.id != "602307650650374165")
      return message.channel.send("Sorry, but you aren't Jamie!!");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);

    return;
  }

  if (command === `${prefix}invite`) {
    let embed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor("Bot Invite")
      .addField(
        "Link:",
        "Insert your link"
      )
      .setFooter(
        "Powered By Ai Hayasaka; " + " Requested by " + message.author.username
      );

    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}server`) {
    let icon = message.guild.iconURL;

    let embed = new Discord.RichEmbed()
      .setColor("FF00FF")
      .setAuthor(message.guild.name + " Info's")
      .setThumbnail(icon)
      .addField("Name:", message.guild.name)
      .addField("Server ID:", message.guild.id)
      .addField("Members:", message.guild.memberCount)
      .addField("Created:", message.guild.createdAt)
      .addField("Region:", message.guild.region)
      .addField("Owner:", message.guild.owner)
      .addField("Verified:", message.guild.verified)
      .setFooter("Powered By Ai Hayasaka");
    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}list`) {
    let embed = new Discord.RichEmbed()
      .setColor("FF00FF")
      .setAuthor("The list of servers what the bot is in!")
      .addField("Server Counter:", bot.guilds.size)
      .addField("Servers:", bot.guilds.array().join("\n"))
      .setFooter("Powered By Ai Hayasaka");
    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}user`) {
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    let embed = new Discord.RichEmbed()
      .setColor("#FF00FF")
      .setAuthor(user.username + "#" + user.discriminator + " Info's")
      .setThumbnail(user.avatarURL)
      .addField("Name:", user.username + "#" + user.discriminator)
      .addField("ID:", user.id)
      .addField("Created", user.createdAt)
      .setFooter("Powered By Ai Hayasaka");
    message.channel.sendEmbed(embed);

    return;
  }

  if (command === `${prefix}dm`) {
    if (message.member.id != "602307650650374165")
      return message.channel.send("Sorry, but you aren't Jamie!!");
    const user = message.mentions.users.first() || message.author;
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});

    user.send(
      message.author.username +
        "#" +
        message.author.discriminator +
        " has messaged you from " +
        message.guild.name +
        " with, " +
        sayMessage
    );

    return;
  }

  if (command === `${prefix}lewdnekos`) {
    if (!message.channel.nsfw)
      return message.channel.send(
        "This channel isn't NSFW checked, please go to a NSFW channel or mark the channel as NSFW"
      );
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request(
      { url: "https://nekos.life/api/v2/img/lewdk", json: true },
      function(error, response, body) {
        let henEmbed = new Discord.RichEmbed()
          .setColor("#FF00FF")
          .setAuthor("NEKO NEKO!")
          .setImage(body.url)
          .setFooter("Powered By Ai Hayasaka");
        message.channel.send(henEmbed);
      }
    );

    return;
  }

  if (command === `${prefix}hentai`) {
    if (!message.channel.nsfw)
      return message.channel.send(
        "This channel isn't NSFW checked, please go to a NSFW channel or mark the channel as NSFW"
      );
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request(
      { url: "https://nekos.life/api/v2/img/hentai", json: true },
      function(error, response, body) {
        let henEmbed = new Discord.RichEmbed()
          .setColor("#FF00FF")
          .setAuthor("Hentai!")
          .setImage(body.url)
          .setFooter("Powered By Ai Hayasaka");
        message.channel.send(henEmbed);
      }
    );

    return;
  }

  if (command === `${prefix}holo`) {
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request({ url: "https://nekos.life/api/v2/img/holo", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor("Holo!")
        .setImage(body.url)
        .setFooter("Opal X Holo");
      message.channel.send(henEmbed);
    });

    return;
  }

  if (command === `${prefix}wallpaper`) {
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request(
      { url: "https://nekos.life/api/v2/img/wallpaper", json: true },
      function(error, response, body) {
        let henEmbed = new Discord.RichEmbed()
          .setColor("#FF00FF")
          .setAuthor("Wallpapers!")
          .setImage(body.url)
          .setFooter("Powered By Ai Hayasaka");
        message.channel.send(henEmbed);
      }
    );

    return;
  }

  if (command === `${prefix}neko`) {
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request({ url: "https://nekos.life/api/v2/img/neko", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor("NEKO!")
        .setImage(body.url)
        .setFooter("Powered By Ai Hayasaka");
      message.channel.send(henEmbed);
    });

    return;
  }

  if (command === `${prefix}kiss`) {
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request({ url: "https://nekos.life/api/v2/img/kiss", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor(message.author.username + " has kissed " + user.username)
        .setImage(body.url)
        .setFooter("Powered By Ai Hayasaka");
      message.channel.send(henEmbed);
    });

    return;
  }

  if (command === `${prefix}hug`) {
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request({ url: "https://nekos.life/api/v2/img/hug", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor(message.author.username + " has hugged " + user.username)
        .setImage(body.url)
        .setFooter("Powered By Ai Hayasaka");
      message.channel.send(henEmbed);
    });

    return;
  }

  if (command === `${prefix}cuddle`) {
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request(
      { url: "https://nekos.life/api/v2/img/cuddle", json: true },
      function(error, response, body) {
        let henEmbed = new Discord.RichEmbed()
          .setColor("#FF00FF")
          .setAuthor(message.author.username + " has cuddle " + user.username)
          .setImage(body.url)
          .setFooter("Powered By Ai Hayasaka");
        message.channel.send(henEmbed);
      }
    );

    return;
  }

  if (command === `${prefix}cum`) {
    if (!message.channel.nsfw)
      return message.channel.send(
        "This channel isn't NSFW checked, please go to a NSFW channel or mark the channel as NSFW"
      );
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request({ url: "https://nekos.life/api/v2/img/cum", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor(
          message.author.username + " has cummed inside of " + user.username
        )
        .setImage(body.url)
        .setFooter("Powered By Ai Hayasaka");
      message.channel.send(henEmbed);
    });

    return;
  }

  if (command === `${prefix}blowjob`) {
    if (!message.channel.nsfw)
      return message.channel.send(
        "This channel isn't NSFW checked, please go to a NSFW channel or mark the channel as NSFW"
      );
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request({ url: "https://nekos.life/api/v2/img/bj", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor(message.author.username + " has sucked off " + user.username)
        .setImage(body.url)
        .setFooter("Powered By Ai Hayasaka");
      message.channel.send(henEmbed);
    });

    return;
  }

  if (command === `${prefix}anal`) {
    if (!message.channel.nsfw)
      return message.channel.send(
        "This channel isn't NSFW checked, please go to a NSFW channel or mark the channel as NSFW"
      );
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request({ url: "https://nekos.life/api/v2/img/anal", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor(
          message.author.username +
            " has fucked " +
            user.username +
            " in the butt!"
        )
        .setImage(body.url)
        .setFooter("Powered By Ai Hayasaka");
      message.channel.send(henEmbed);
    });

    return;
  }

  if (command === `${prefix}boob`) {
    if (!message.channel.nsfw)
      return message.channel.send(
        "This channel isn't NSFW checked, please go to a NSFW channel or mark the channel as NSFW"
      );
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request(
      { url: "https://nekos.life/api/v2/img/boobs", json: true },
      function(error, response, body) {
        let henEmbed = new Discord.RichEmbed()
          .setColor("#FF00FF")
          .setAuthor(
            message.author.username + " is boob playing with " + user.username
          )
          .setImage(body.url)
          .setFooter("Powered By Ai Hayasaka");
        message.channel.send(henEmbed);
      }
    );

    return;
  }

  if (command === `${prefix}lewdholo`) {
    if (!message.channel.nsfw)
      return message.channel.send(
        "This channel isn't NSFW checked, please go to a NSFW channel or mark the channel as NSFW"
      );
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request(
      { url: "https://nekos.life/api/v2/img/hololewd", json: true },
      function(error, response, body) {
        let henEmbed = new Discord.RichEmbed()
          .setColor("#FF00FF")
          .setAuthor("Lewd Holo")
          .setImage(body.url)
          .setFooter("Opal X Holo");
        message.channel.send(henEmbed);
      }
    );

    return;
  }

  if (command === `${prefix}walk`) {
    if (message.member.id != "465655362700181534")
      return message.channel.send("Walking permission **DENIED**");
    message.channel.send("Walking permission **granted**!!");

    return;
  }

  if (command === `${prefix}rusherhack`) {
    if (message.member.id != "605843924657111082")
      return message.channel.send("Command is **disabled** currently rn!!");
    let bUser = message.author;

    message.guild.member(bUser).ban("rekt rusherhack user!!!");
    message.author.send("lol rekt but heres a code what you can use: beaner");

    return;
  }

  if (command === `${prefix}femdom`) {
    if (!message.channel.nsfw)
      return message.channel.send(
        "This channel isn't NSFW checked, please go to a NSFW channel or mark the channel as NSFW"
      );
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request(
      { url: "https://nekos.life/api/v2/img/femdom", json: true },
      function(error, response, body) {
        let henEmbed = new Discord.RichEmbed()
          .setColor("#FF00FF")
          .setAuthor("Femdom")
          .setImage(body.url)
          .setFooter("For anarch <3");
        message.channel.send(henEmbed);
      }
    );

    return;
  }

  if (command === `${prefix}trap`) {
    if (!message.channel.nsfw)
      return message.channel.send(
        "This channel isn't NSFW checked, please go to a NSFW channel or mark the channel as NSFW"
      );
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request({ url: "https://nekos.life/api/v2/img/trap", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor("Trans Rights")
        .setImage(body.url)
        .setFooter("Trans Rights");
      message.channel.send(henEmbed);
    });

    return;
  }

  if (command === `${prefix}poke`) {
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request({ url: "https://nekos.life/api/v2/img/poke", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor(message.author.username + " has poked " + user.username)
        .setImage(body.url)
        .setFooter("Powered By Ai Hayasaka");
      message.channel.send(henEmbed);
    });

    return;
  }

  if (command === `${prefix}feed`) {
    const user = message.mentions.users.first() || message.author;
    if (!user) return message.channel.send("User couldn't be found!");

    request({ url: "https://nekos.life/api/v2/img/feed", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor(message.author.username + " has fed " + user.username)
        .setImage(body.url)
        .setFooter("Powered By Ai Hayasaka");
      message.channel.send(henEmbed);
    });

    return;
  }

  if (command === `${prefix}8ball`) {
    const sayMessage = args.join(" ");

    request({ url: "https://nekos.life/api/v2/8ball", json: true }, function(
      error,
      response,
      body
    ) {
      let henEmbed = new Discord.RichEmbed()
        .setColor("#FF00FF")
        .setAuthor("8Ball Question: " + sayMessage)
        .setImage(body.url)
        .setFooter("Powered By Ai Hayasaka");
      message.channel.send(henEmbed);
    });

    return;
  }
});

bot.login(botsettings.token);
