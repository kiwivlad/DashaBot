const Discord = module.require("discord.js");

module.exports.execute = async (client, message, args) => {
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`Удалено ${args[0]} сообщений`)
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "clear",
    category: "Модерирования",
description: "Очищает чат",
usage: "1 - 100",
alias: ["cr"]
};