const { Client, MessageEmbed } = require('discord.js');

module.exports.execute = async (client, message, args) => {
//command
  const embed = new MessageEmbed()
  .setTitle("__**Shadow**__", true)
  .setColor("#2f3136")
  .setThumbnail("https://images-ext-1.discordapp.net/external/pnFVsr6gHBj3KYP5e4yecdVvFQBV0Q45lV2tlLGT8vw/https/images-ext-2.discordapp.net/external/lAzDmBfUArcRUy8yHyjbmW86oOkEgLIfizwVVjl4SrE/https/images-ext-2.discordapp.net/external/T4U6KyuYqjhosy-IhUujjiP6MCgFrrXnhhEBXKcKP08/https/media.giphy.com/media/JoVs1oGjxKi4ROZ5E3/giphy.gif")
  .setDescription('<:ping:755553677904707605>[KstaHost](https://mixail89.ovh/host)\n<:discord:762464110427897886>[Пригласить Бота](https://discord.com/api/oauth2/authorize?client_id=763107868597288960&permissions=8&scope=bot)\n<:host:762439043085500416>[Сервер поддержки](https://discord.gg/Eqfrfc4)')
  message.channel.send(embed);
  }
  module.exports.help = {
    name: "invite",
    category: "Информация о боте",
    usage: "!invite => Получить ссылку приглашение",
    aliases: ['ite'],
    description: "Пригласить бота - Зайти на сервер подержки."
}