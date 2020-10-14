const Discord = require("discord.js");


module.exports.help = {
    name: "ban",
    alias: [`b`],
    category: "Модерирования",
    usage: "@username Причина",
    description: "Заблокировать учасника на вашем сервере"
}
module.exports.execute = async (client, message, args) => {
    let Timer = args[0];

    if(!args[0]){
      return message.channel.send(
        new Discord.MessageEmbed()
        .setColor('#6A5ACD')
        .setTitle('⚠️ | Чтобы забанить пользевателя нужно указать время и причину!')
        .addField('**Пример:**', '**!ban @username Причина**')
      );
    }
}