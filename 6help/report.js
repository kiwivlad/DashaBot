const Discord = require("discord.js");


module.exports.execute = async (client, message, args) => {
    let Timer = args[0];

    if(!args[0]){
      return message.channel.send(
        new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle('⚠️ | Укажите текст для отправки сообщения в канал для жалоб для расматрения жалобы на игрока!')
        .addField('**Пример:**', '**!report @player Дебил =)**')
      );
    }
}

module.exports.help = {
    name: "report",
    category: "Модерирования",
description: "Отправить жалобу на игрока",
usage: "@player Причина",
alias: ["rp"]
};