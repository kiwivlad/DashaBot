const Discord = require("discord.js");


module.exports.help = {
    name: "avatar",
    category: "Информация",
    aliases: ['ava'],
    usage: "avatar (пользователь)",
    description: "Получить аватарку упомянутого пользователя"
}
module.exports.execute = async (client, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    let argsUser
if (member) argsUser = member.user
else argsUser = message.author
let embed = new Discord.MessageEmbed()
.setAuthor(`Искал ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
.addField('Аватарка', `[Ссылка](${argsUser.displayAvatarURL({ dynamic: true, size: 1024 })})`)
.setImage(argsUser.displayAvatarURL({ dynamic: true, size: 1024 }))
.setColor('#2f3136')
message.channel.send(embed)
};