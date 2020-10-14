const Discord = require("discord.js");

module.exports.help = {
    name: "dr",
    category: "Развлечения",
    usage: "Ник пользователя",
    description: "Поздравления с днем рожднения"
}
module.exports.execute = async (client, message, args) => {
//command
{
const user = message.mentions.users.first();
if(!user)
    return message.reply('Пожалуйста, укажите пользователя, которого хотите поздравить с днем рождения.');

{

const fuck = new Discord.MessageEmbed()
      .setTitle(`${user.username}  днем рождения`)
      .setColor("#6A5ACD")
      .setImage("http://pozdravok.ru/cards/den-rozhdeniya/otkrytka-den-rozhdeniya-pozdravok-zayka.gif") 
  message.channel.send(fuck)
// embed: utils.embed(`${user.username}'s Avatar`, `[Download](${user.avatarURL})`, [], { image: user.avatarURL })
};
}
   
}
