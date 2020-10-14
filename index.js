const discord = require("discord.js");

const config = require("./config.json");
const utils = require("./utils/util.js");
const profile = require("./profile.json");
const mh = require("./utils/music_handler.js");
const ms = require('ms')
const emojiID = config.embed_emoji
const ownerID = config.ownerID
const customtext = config.customtext
const ecolor = config.embed_color

const client = new discord.Client();
const util = new utils.Utils(client, process.cwd());
const music_handler = new mh.MusicHandler(discord, util);
module.exports = { client, config, util, music_handler };

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

client.on('message', msg => {//Отвечает игроку
    if (msg.content === 'Привет') {
      msg.reply('Привет =)');
    }
  });

client.on('message', msg => {//Отвечает игроку
    if (msg.content === 'Пока') {
      msg.reply('Пока =(');
    }
  });

  client.on('message', msg => {//Отвечает игроку
    if (msg.content === 'Карета лох') {
      msg.reply('Согласен');
    }
  });

util.loadModules("events");
util.loadModules("commands", true);

client.login(config.token);
module.exports.help = {
    aliases: ['ak','b','rp','ava','h','ghb','os','usin','bs','don','i-s','i','ib','pg','rul','','','','','','','','','','','','','','','','','','','','','',],
}
