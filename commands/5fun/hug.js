const Discord = require("discord.js");
const superagent = require("snekfetch");
const { config } = require("../../index.js");
     
        module.exports.help = {
            name: "hug",
            category: "Развлечения",
          description: "Позволяет обнять другого пользователя",
          usage: "Ник пользователя"
        }
        module.exports.execute = async (client, message, args) => {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомяните кого-нибудь, чтобы обнять.');

          superagent.get('https://nekos.life/api/v2/img/hug')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(user.username + " Только что обнял " + message.author.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((user.toString() + " обнял " + message.author.toString()))
            .setFooter(`это так мило`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          };