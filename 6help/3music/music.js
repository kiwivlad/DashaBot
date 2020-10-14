const Discord = require("discord.js");

module.exports.execute = async (client, message, args) => {

let Timer = args[0];

    if(!args[0]){
      return message.channel.send(
        new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle("||❗У меня недостаточно прав для выполнения этой команды❗||")
      );
    }
  }
module.exports.help = {
  name:"У меня недостаточно прав для выполнения этой команды❗❗❗❗",
  category: "Музыка",
  aliases: [],
  usage: "",
  description: "❗У меня недостаточно прав для выполнения этой команды❗"
}