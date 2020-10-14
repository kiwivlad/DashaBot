const Discord = require("discord.js");


module.exports.help = {
    name: "timer",
    aliases: [],
    category: "Развлечения",
    usage: "Пример:\n!timer 10m",
    description: "Теймер"
}
module.exports.execute = async (client, message, args) => {
    let Timer = args[0];

  if(!args[0]){
    return message.channel.send(
      new Discord.MessageEmbed()
      .setColor('FF0000')
      .setTitle('⚠️ | Укажите время на которое вы хотите поставить таймер!')
      .addField('**Пример:**', '**!timer 10m**')
    );
  }
}