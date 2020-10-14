module.exports.execute = async (client, message, args) => {
const Discord = require("discord.js");
const { version } = require("discord.js");
const moment = require("moment");
const v = `1.2.10`
const os = require('os')
const tme =  require('parse-ms')
const uptme = tme(client.uptime)

const m = require("moment-duration-format");

let cpuStat = require("cpu-stat")
const ms = require("ms")

let bremya;
if (uptme.minutes === 0) bremya = `${uptme.minutes} м. ${uptme.seconds} сек.`
else if (uptme.hours === 0) bremya = `${uptme.hours} ч. ${uptme.minutes} м.`
else if (uptme.days === 0) bremya = `${uptme.days} д. ${uptme.hours} ч. ${uptme.minutes} м.`
else bremya = `${uptme.days} д. ${uptme.hours} ч. ${uptme.minutes} м.`

let status;
if (Date.now()-message.createdTimestamp < 300) status = `<:status_3:763503035560624158>`
else if (Date.now()-message.createdTimestamp > 299 && Date.now()-message.createdTimestamp < 1500) status = `<:status_2:763503035497971753>`
else if (Date.now()-message.createdTimestamp > 1499) status = `<:status_1:763503035334262817>`
    
        const ihatekids = new Discord.MessageEmbed()
            .setAuthor("Показатели бота")
            .setColor("#2f3136")
            .setThumbnail('https://discordemoji.com/assets/emoji/3619_discord_online.png')
            .setTimestamp()
            .addField("⭕ | Использование памяти", `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
            .addField("👥 | Пользователей", `${client.users.cache.size}`, true)
            .addField("🌐 | Серверов", `${client.guilds.cache.size}`, true)
            .addField("<:ping2:755553683009306686> | Задержка ", `${Date.now()-message.createdTimestamp} мс`, true)
            .addField("🗨 | Каналов", `${client.channels.cache.size}`, true)
            .addField("<:oc:755553659609153618> | ОС", `${os.platform} ${os.arch}`)
            .addField("<:ping:755553677904707605> | Процессор ", `${os.cpus()[0].model}`, true)
            .addField("⚙ | Кол-во команд", `44`, true)
            .addField("💡 | Discord.js", `v${version}`, true)
            .addField('<:host:762439043085500416> | Хостинг', `[KstaHost](https://mixail89.ovh/host)`, true)
            .addField("Инфо о создетеле:", "<:dev:755553599001591918> | DevBot <@715891987399704597>")
            .addField(`Инфо о Хосте`, "<:nitro:762468202030301246> | [Host](https://mixail89.ovh/): <@614401385496313918>")
            message.channel.send(ihatekids)
           }
    module.exports.help = {
        name: "bot-info",
        category: "Информация о боте",
        aliases: ['bs'],
        usage: "Ничего",
        description: "Отправляет подробную информацию о боте"
    }