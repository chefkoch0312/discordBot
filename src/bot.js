const Discord = require("discord.js");
require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
});

client.on("ready", () => {
    console.log("up & running... - bot is now known as user: " + client.user.tag);
});

client.on("messageCreate", (message) => {
    const d = new Date();
    d.toISOString();
    console.log("!!! Message erkannt ");
    console.log("Nachrichtenautor:", message.author.username);
    console.log("Datum: ", d);
    console.log("Channel: ", message.channel.name);
    console.log("Nachricht: ", message.content);

    if (message.author.bot === false && message.content === "!abc") {
        message.channel.send("def!");
    }

    console.log();
});

client.login(process.env.DISCORD_BOT_TOKEN);
