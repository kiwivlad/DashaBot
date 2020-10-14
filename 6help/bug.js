const Discord = require("discord.js");


module.exports.help = {
    name: "support",
    alias: [],
    category: "Модерирования",
    usage: "В боте неработает !help",
    description: "Получить подержку бота"
}
module.exports.execute = async (client, message, args) => {
    let Timer = args[0];

    if(!args[0]){
      return message.channel.send(
        new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle('⚠️ | Укажите текст для отправки сообщения в подержку бота!')
        .addField('**Пример:**', '**!support у меня неработает команда такаето такаето**')
      );
    }
}