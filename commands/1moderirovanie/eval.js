module.exports.execute = async (client, message, args) => {
const Discord = require('discord.js')
if(message.author.id === "604313553025105930") {
const bot = client
const msg = message
let  evalm = new Discord.MessageEmbed()
.setColor('#064f3b')
.setAuthor(`Выполнил: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
let code = args.slice(0).join(' ')
let out  
try {
out = eval(code)//.require("util").inspect
if(out == bot.token) out = `Токен был скрыт`
evalm.addField(`Ответ`, '```js\np```'.replace('s!', out))
} catch(e) {
out = `${e.name}: ${e.message}`
evalm.addField(`Ошибка`, '```js\np```'.replace('s!', out))
} 
message.channel.send(evalm)
}
}
module.exports.help = {
    name: "eval",
    category: "Модерирования",
description: "Выполняет код напрямую из Discord",
usage: "eval (код)",
alias: ["e"]
};