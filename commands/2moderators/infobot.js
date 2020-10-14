const Discord = require("discord.js");


module.exports.help = {
    name: "infobot",
    category: "Разработка",
description: "Выводит информацыю о боте",
usage: "[command]",
aliases: ['ib']
}
module.exports.execute = async (client, message, args) => {
//command
{
const ihatekids = new Discord.MessageEmbed()
      .setAuthor("[LegendaBot]")
      .addField("Привет! Меня зовут Даша!", `Я небольшой пушистый бот с кучкой всяких фыр-фырных полезностей.`)
      .addField("Мой префикс \`!\`, но ты также можешь просто называть меня @DashaBot ко мне.", `Взгляни на команду !help для более детальной информации о моих возможностях`)
      .addField("Сборка: 2.9.0", ` \`последнее обновления\` (07.09 2020)`)
      .addField("Мой разраб:", `<@604313553025105930>`)
      .addField("Связь с Администрацией", `ВКонтакте - https://vk.com/gasage_1841\nTelegram - Gasage`)
      .setColor("#6A5ACD")
      .setFooter('Пригласить бота на сервер : !invite', 'https://cdn.discordapp.com/emojis/751110881831682191.png?v=1')
      .setTimestamp()
  message.channel.send(ihatekids)

};
}