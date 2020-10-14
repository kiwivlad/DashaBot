const Discord = require("discord.js");


module.exports.help = {
    name: "mute",
    alias: [],
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
        .setTitle('⚠️ | Чтобы замютить учасника нужно указать время и причину!')
        .addField('**Пример:**', '**!mute @username Причина**')
      );
    }
}