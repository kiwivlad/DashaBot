const Discord = require("discord.js");


module.exports.help = {
    name: "ask",
    category: "Модерирования",
description: "Ответ на тикет",
usage: "[Ответ]",
alias: "[ak]"
}
module.exports.execute = async (client, message, args) => {
//command
if(!message.member.hasPermission('ADMINISTRATOR', 'BAN_MEMBERS')) return message.channel.send("У вас нет прав");
const sayMessage = args.join(" ");
{
const ihatekids = new Discord.MessageEmbed()
      .setAuthor("Ответ на тикет", `https://cdn.discordapp.com/attachments/702131659092394005/745030748565667940/593897328432250895.gif`)
      .addField("Ответ администрации: ", sayMessage)
      .addField("Администратор", `${message.author.username}`)
      .setColor("#6A5ACD")
      .setFooter('Пригласить бота на сервер : !invite', 'https://cdn.discordapp.com/emojis/733618170149208084.png?v=1')
      .setTimestamp()
  message.channel.send(ihatekids)

};
}