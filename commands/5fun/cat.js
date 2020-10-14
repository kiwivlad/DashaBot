const superagent = require("snekfetch");
const Discord = require('discord.js');
const { config } = require("../../index.js");


module.exports.help = {
  name: "cat",
  category: "Развлечения",
  description: "Отправляет случайное изображение кота",
  usage: "Ничего"
}
module.exports.execute = async (client, message, args) => {
//command
superagent.get('https://nekos.life/api/v2/img/meow')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Случайный кот")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`owo`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
};