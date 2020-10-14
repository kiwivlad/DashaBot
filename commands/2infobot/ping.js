    const Discord = require("discord.js");
    module.exports.execute = async (client, message, args) => {
        const embedStats = new Discord.MessageEmbed()
        .setColor('#2f3136')
        .setAuthor("Пинг", `https://images-ext-2.discordapp.net/external/slD77kb8mbmNxBA283yCuqnJz9g_o8EF7fhwhk_XUs8/%3Fwidth%3D475%26height%3D475/https/media.discordapp.net/attachments/642784667174436864/749658582147923998/2985967.png`)
        .setThumbnail(`https://images-ext-2.discordapp.net/external/slD77kb8mbmNxBA283yCuqnJz9g_o8EF7fhwhk_XUs8/%3Fwidth%3D475%26height%3D475/https/media.discordapp.net/attachments/642784667174436864/749658582147923998/2985967.png`)
        .setDescription(`<:ping2:755553683009306686>**Пинг Бота:** \`\`${Date.now() - message.createdTimestamp}мс\`\`\n<:ping:755553677904707605>**Пинг Отправки Сообщений:** \`\`${client.ws.ping | 0 }мс\`\``)
        .setFooter('Пригласить бота на сервер : !invite', 'https://cdn.discordapp.com/emojis/751110881831682191.png?v=1')
        .setTimestamp()
        message.channel.send(embedStats)
    };
    module.exports.help = {
        name: "ping",
        category: "Информация о боте",
        aliases: ['pg'],
        usage: "Ничего",
        description: "Показывает Ping бота"
    };
