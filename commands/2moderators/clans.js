const Discord = require("discord.js");
module.exports.execute = async (client, message, args) => {
    const sayMessage = args.join(" ");
    
  {
    const embed = new Discord.MessageEmbed()
    .setColor("#6A5ACD")
    .setTitle("Клан успешно отправлен на модерацию!")
    .addField("Создатель: ", message.author)
    .addField("Названия клана: ", sayMessage)
    .setFooter("Вскорем времени мы одобрим вашь клан")
    .setTimestamp()
    message.channel.send(embed)

      }
}
module.exports.help = {
    name: "clans",
    aliases: ["Проблема"],
    category: "Разработка",
    usage: "Названия клана",
    description: "Небольшая клановая система"
}