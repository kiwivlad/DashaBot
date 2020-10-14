const superagent = require("snekfetch");
const Discord = require('discord.js');
const { config } = require("../../index.js");

module.exports.help = {
  name: "anal",
  category: "nsfw",
  usage: "Ничего",
description: "nsfw"
},
module.exports.execute = async (client, message, args) => {
//command
if (!message.channel.nsfw) return message.channel.send('Вы можете использовать эту команду на канале NSFW!')
superagent.get('https://nekos.life/api/v2/img/anal')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Hentai")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`Tags: anal`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}