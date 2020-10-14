const discord = require("discord.js");
const { config } = require("../../index.js");

module.exports.execute = async (client, message, args) => {

    const helpCommand = client.commands.get("help").help;
    const embed = new discord.MessageEmbed()
        .setColor("#2f3136")
        .setThumbnail(client.user.avatarURL(client.user))
        .setFooter(`Запрошенный ${message.author.tag}`)
        .setTimestamp();

    if (!args[0]) {

        const categories = [...new Set(client.commands.map(command => command.help.category))];
    
        embed.setTitle("-= Меню команд =-");
        embed.setThumbnail("https://media1.giphy.com/media/kZnyjr1rcKM5UqdaDF/giphy.gif")
        embed.setDescription([
            `**Если хотите узнать поподробнее о команде напишите**`,
            `\`${config.prefix}${helpCommand.name} ${helpCommand.usage}\``
        ].join("\n"));
    
        let categorisedCommands;
    
        for (const category of categories) {
            categorisedCommands = client.commands.filter(cmd => cmd.help.category == category);
            embed.addField(category, categorisedCommands.map(cmd => `\`${cmd.help.name}\``).join(", "));
        }
    
        message.channel.send(embed);
        return;
    }

    const command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));
    if (!command) return this.execute(client, message, []);

    const commandInfo = command.help;
    const aliasesPresent = commandInfo.aliaseslength > 300000;
    embed.setThumbnail("https://cdn.discordapp.com/attachments/736940839422656592/738278331816083506/load1.gif")
    embed.setTitle(`${commandInfo.name.toUpperCase()} COMMAND`);
    embed.setDescription(commandInfo.description);
    embed.addField("использование", `\`${config.prefix}${commandInfo.name}${commandInfo.usage != "" ? ` ${commandInfo.usage}` : ""}\``);

    message.channel.send(embed);

}

module.exports.help = {
    name: "help",
    aliases: ['h'],
    category: "Информация о боте",
    usage: "[command]",
    description: "Нужна помощь с командами, потому что они слишком сложные? Не смотрите дальше! Я здесь, чтобы помочь вам!"
}