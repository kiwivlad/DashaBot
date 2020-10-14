const superagent = require("snekfetch");
const { config } = require("../../index.js");
const Discord = require('discord.js')

module.exports.help = {
  name: "pussy",
  category: "nsfw",
  usage: "Ничего",
  description: "nsfw"
}
module.exports.execute = async (client, message, args) => {
//command
if (!message.channel.nsfw) return message.channel.send('Вы можете использовать эту команду на канале NSFW!')
superagent.get('https://nekos.life/api/v2/img/pussy')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Pussy")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`Tags: Pussy`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}