const superagent = require("snekfetch");
const Discord = require('discord.js');
const { config } = require("../../index.js");



module.exports.help = {
  name: "dog",
  category: "Развлечения",
description: "Отправляет случайное изображение собаки",
usage: "Ничего"
}
module.exports.execute = async (client, message, args) => {
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Случайная собака")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`woof`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
};