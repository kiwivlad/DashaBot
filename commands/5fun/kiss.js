const Discord = require("discord.js");
const superagent = require("snekfetch");
const { config } = require("../../index.js");

        module.exports.help = {
            name: "kiss",
            category: "Развлечения",
          description: "Позволяет поцеловать другого пользователя",
          usage: "Ник пользователя"
        }
        module.exports.execute = async (client, message, args) => {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомянуть кого-то, чтобы поцеловать');

          superagent.get('https://nekos.life/api/v2/img/kiss')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(user.username + " Только что получил поцелуй от " + message.author.username)
            .setImage(response.body.url)
            .setColor(`#6A5AC`)
            .setDescription((user.toString() + " получил поцелуй от " + message.author.toString()))
            .setFooter(`это так мило`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          };