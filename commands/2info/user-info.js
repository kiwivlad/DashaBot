    module.exports.execute = async (client, message, args) => {
        const Discord = require('discord.js')
        const strftime = require('strftime')
      let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
            let argsUser
    if (member) argsUser = member.user
    else argsUser = message.author
           let statuses = {
        online: '<:online:762464110402338866> | В сети',
        idle: '<:idle:762464110369308713> | Не активен',
        dnd: '<:dnd:762464110251868220> | Не беспокоить',
        offline: '<:offline:762464110322515969> | Не в сети',
        STREAMING: '<:diamond:762657021807165442> | Стримит'
    }
    let game 
    if (!argsUser.presence.activities[0]) game = `${statuses[argsUser.presence.status]}`
    else if (argsUser.presence.activities[0].type == 'PLAYING') game = `Играет в ${argsUser.presence.activities[0].name}`
    else if (argsUser.presence.activities[0].type == 'STREAMING') game = `Стримит [${argsUser.presence.activities[0].name}](${argsUser.presence.activities[0].url})`
    else if (argsUser.presence.activities[0].type == 'LISTENING') game = `Слушает ${argsUser.presence.activities[0].name}`
    else if (argsUser.presence.activities[0].type == 'WATCHING') game = `Смотрит ${argsUser.presence.activities[0].name}`
    else if (argsUser.presence.activities[0]) game = `${argsUser.presence.activities[0].state}`
    let day = 1000 * 60 * 60 * 24
      /*  let z
    if (!argsUser.flags.toArray()) game = `Отсутствуют`
    else if (argsUser.flags.toArray() == 'VERIFIED_DEVELOPER') z = `<:payzi_developer:717044784119808072>`
    else if (argsUser.flags.toArray() == 'STREAMING') z = `Стримит [${argsUser.presence.activities[0].name}](${argsUser.presence.activities[0].url})`
    else if (argsUser.flags.toArray() == 'LISTENING') z = `Слушает ${argsUser.presence.activities[0].name}`
    else if (argsUser.flags.toArray() == 'WATCHING') z = `Смотрит ${argsUser.presence.activities[0].name}`
    else if (argsUser.presence.activities[0]) z = `${argsUser.presence.activities[0].state}`*/
    let date1 = new Date(message.createdTimestamp)
    let date2 = new Date(argsUser.createdTimestamp)
    let date3 = new Date(message.guild.member(argsUser).joinedTimestamp)
    let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day))
    let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day))
    if (game === 'null') game = `Неизвестно`
        let  embed = new Discord.MessageEmbed()
        .setTitle(`Пользователь ${argsUser.tag}`)
        .setThumbnail(argsUser.displayAvatarURL({ dynamic: true }))
        .addField ('Основное', `**Статус** \n${game} \n**Зарегистрировался** \n${strftime('%d.%m.%Y в %H:%M', new Date(argsUser.createdTimestamp))} (${diff1} дн. назад) \n**Зашёл на сервер** \n${strftime('%d.%m.%Y в %H:%M', new Date(message.guild.member(argsUser).joinedTimestamp))} (${diff2} дн. назад)`)
        //.addField('Значки', `${z}`)
        .setColor('#2f3136')
        message.channel.send(embed)
       }
       module.exports.help = {
        name: "user-info",
		aliases: ['usin'],
        category: "Информация",
        usage: "user (пользователь)",
        description: "Информация о пользователе"
    }