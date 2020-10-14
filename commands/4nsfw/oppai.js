const superagent = require("snekfetch");
const { config } = require("../../index.js");
const Discord = require('discord.js')

module.exports.help = {
  name: "oppai",
  category: "nsfw",
  usage: "Ничего",
description: "nsfw"
},
module.exports.execute = async (client, message, args) => {
//command
if (!message.channel.nsfw) return message.channel.send('Вы можете использовать эту команду на канале NSFW!')
superagent.get('https://nekos.life/api/v2/img/boobs')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("oppai")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`Tags: oppai`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}