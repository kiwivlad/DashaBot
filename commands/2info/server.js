const Discord = require('discord.js')

module.exports.help = {
  name: "server-info",
  category: "Информация",
  aliases: ['server'],
  usage: "Ник пользователя",
  description: "Получить подробную информацию о сервере"
}
module.exports.execute = async (client, message, args) => {
        let on = message.guild.members.cache.filter(m => m.user.presence.status === "online").size
        let dnd = message.guild.members.cache.filter(m => m.user.presence.status === "dnd").size
        let idle = message.guild.members.cache.filter(m => m.user.presence.status === "idle").size
        let of = message.guild.members.cache.filter(m => m.user.presence.status === "offline").size
        let c = message.guild.channels.cache.filter(ch => ch.type == "category").size
        let t = message.guild.channels.cache.filter(ch => ch.type == "text").size
        let v = message.guild.channels.cache.filter(ch => ch.type == "voice").size
        let s = message.guild.channels.cache.filter(ch => ch.type == "store").size
        let n = message.guild.channels.cache.filter(ch => ch.type == "news").size
        let ema = message.guild.emojis.cache.filter(e => e.animated == true).size
        let emna = message.guild.emojis.cache.filter(e => e.animated == false).size
        let afkc = `${message.guild.afkChannel} | ${message.guild.afkChannelID}`
        if (afkc === `null | null`) afkc = `Отсутствует`
        let afkt = message.guild.afkTimeout/60
        let sysc = `${message.guild.systemChannel} | ${message.guild.systemChannelID}`
        if (sysc === `null | null`) sysc = `Отсутствует`
        let mfa = `Ошибка`
        if (message.guild.mfaLevel === 1) mfa = `Включён`
        if (message.guild.mfaLevel === 0) mfa = `Выключен`
        let  embed = new Discord.MessageEmbed()
        .setTitle('Информация о сервере "p"'.replace('p', message.guild.name))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`<:korona:762463895859232775> | Ролей - ${message.guild.roles.cache.size}\n<:verify:762463939354558485> | Системный канал - ${sysc}\n🔐 | 2FA - ${mfa}`)
        .addField ('Участники [b]'.replace('b', message.guild.memberCount), `<:member:755553648435658792> | Пользователей - ${message.guild.members.cache.filter(m => m.user.bot === false).size}\n<:bot:762464076281806878> | Ботов - ${message.guild.members.cache.filter(m => m.user.bot === true).size}\n<:online:762464110402338866> | Онлайн - ${on}\n<:dnd:762464110251868220> | Не беспокоить - ${dnd}\n<:idle:762464110369308713> | Не активны - ${idle}\n<:offline:762464110322515969> | Не в сети - ${of}`,true)
        .addField ('Каналов [k]'.replace('k', message.guild.channels.cache.size), `<:setting:762464110360920074> | Категорий - ${c}\n<:channel:755553686897426483> | Текстовых - ${t}\n<:voice:762464110348468234> | Голосовых - ${v}`,true)
        .addField ('Эмодзи [e]'.replace('e', message.guild.emojis.cache.size), `:map: | Не анимированные - ${emna}\n<a:minecraft:755934621245374615> | Анимированные - ${ema}`)
        .addField ('Владелец', `${message.guild.owner} (${message.guild.ownerID})`,true)
        .addField ('Регион', `<:discord:762464110427897886> | ${message.guild.region}`,true)
        .addField ('АФК', `<:discord:762464110427897886> | Канал - ${afkc}\n<:muted:762464110226440233> | ТаймАут - ${afkt} минут`)
        .addField ('Бусты', `<:boost:762468766725570560> | Количество - ${message.guild.premiumSubscriptionCount}\n<:nitro:762468202030301246> | Уровень буста - ${message.guild.premiumTier}`)
        .setColor('#064f3b')
        message.channel.send(embed)

}
