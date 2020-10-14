module.exports.execute = async (client, message, args) => {
    if(message.author.id != "604313553025105930") return message.channel.send("Ты не мой хозяин((")
 try {
     await message.channel.send("Я выключаюсь мой повелитель")
     process.exit()
 } catch(e) {
     message.channel.send(`ERROR: ${e.message}`)
 }
}
module.exports.help = {
    name: 'offbot',
    category: "Модерирования",
    description: "Отключения бота",
    usage: "Отключения бота",
    alias: ["ofbt"]
}