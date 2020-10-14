const superagent = require("snekfetch");
const Discord = require('discord.js');
const { config } = require("../../index.js");

const rp = require('request-promise-native');

module.exports.help = {
    name: "boobs",
    category: "nsfw",
    usage: "Ничего",
  description: "nsfw"
},
module.exports.execute = async (client, message, args) => {
  //command
  if (!message.channel.nsfw) return message.channel.send('Вы можете использовать эту команду на канале NSFW!')


  return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const lewdembed = new Discord.MessageEmbed()
      .setTitle("Boobs")
      .setColor(`#000000`)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])


    message.channel.send(lewdembed);
});
  }