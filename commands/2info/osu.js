const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("95206b2b9ea61afbc45117d5831c1ff08bc4cf81" , {
    notFoundAsError: true,
    completeScores: false 
})

module.exports.help = {
  name: "osu",
  category: "Информация",
  aliases: ['os'],
  usage: "Ник пользователя",
  description: "Получает информацию о пользователе из Osu!"
}
module.exports.execute = async (client, message, args) => {
//command

let username = args[0]
  
  
if (!args[0]) return message.channel.send('Пожалуйста, укажите действительный ник пользователя! (osu!)')

api.getUser({u: username}).then(user => {
const embed = new Discord.MessageEmbed()
.setTitle('Пользовательская поисковая система Osu')
.setImage("https://acegif.com/wp-content/uploads/starfall-gif.gif")
.setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
.setColor("#6A5ACD")
.addField('Никнейм', user.name)
.addField('PP', Math.round(user.pp.raw))
.addField('Ранг', user.pp.rank)
.addField('Лвл', Math.round(user.level))
.addField('Страна', user.country)
.addField('Рейтинг в страны', user.pp.countryRank)
.addField('Количество игр', user.counts.plays)
.addField('Точность', `${user.accuracyFormatted}`)
.setFooter('Запрошено ' + message.author.tag, message.author.avatarURL)
message.channel.send(embed)

})

}