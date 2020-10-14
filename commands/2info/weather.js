module.exports.execute = async (client, message, args) => {
       const Discord = require('discord.js')
        const weather = require('weather-js')
    var poll = args.slice(0).join(' ')
    if(!poll) return message.channel.send(`укажите город`, message);
      weather.find({search: `${poll}`, degreeType: 'C'}, function(err, result) {
  if(err) message.channel.send(err);
        if (result === undefined || result.length === 0) {
          message.channel.send(`укажите, пожалуйста, верный город. Возможно вы ошиблисьв название города`, message);
          return
        }
 var current = result[0].current
    let embed = new Discord.MessageEmbed()
    .setTitle('Погода')
    .addField ('Город', `${current.observationpoint}`,true)
    .addField ('Погода', `${current.temperature}°C , ${current.skytext}`,true)
    .addField ('Ощущается как', `${current.feelslike}°C`,true)
    .addField ('Влажность', `${current.humidity}%`,true)
    .addField ('Ветер', `${current.windspeed}`,true)
    .setThumbnail(current.imageUrl)
    .setColor('#2f3136')
    .setFooter('Вроде неплохо')
    message.channel.send({ embed })
      })
       }
       module.exports.help = {
    name: "weather",
    aliases: [],
    category: "Информация",
    usage: "weather (город)",
    description: "Погода в указанном городе"
    }