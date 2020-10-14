const { config } = require("../../index.js");
const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports.help = {
            name: "slap",
            category: "Развлечения",
          description: "Позволяет дать пользователю пощечину",
          usage: "Ник пользователя"
        }
          module.exports.execute = async (client, message, args) => {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомяните кого-нибудь, чтобы ударить!');

          superagent.get('https://nekos.life/api/v2/img/slap')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(user.username + " только что получил пощечину от " + message.author.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((user.toString() + " получил пощечину " + message.author.toString()))
            .setFooter(`RIP`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          };