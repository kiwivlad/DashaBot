module.exports.execute = async (client, message, args) => {
    const Discord = require('discord.js')
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return ErrorEmbed(`у вас недостаточно прав для выполнения данной команды!\nТребуемые права: \`Manage Messages\``, message)
if (!args[0]) return ErrorEmbed(`укажите сообщение`, message);
message.channel.send(`${args.slice(0).join(" ")}`)
}
module.exports.help = {
    name: "say",
    alias: [],
    category: "Модерирования",
    usage: "Привет, как дела?",
    description: "Вывод сообщений от имени бота"
}