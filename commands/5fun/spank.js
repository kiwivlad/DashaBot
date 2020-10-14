const { config } = require("../../index.js");
const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports.help = {
            name: "spank",
            category: "Развлечения",
          description: "хе-хе позволяет тебе шлепать пользователя",
          usage: "Ник пользователя"
        }
          module.exports.execute = async (client, message, args) => {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомяните кого-нибудь, чтобы отшлепать! ._.');

          superagent.get('https://nekos.life/api/v2/img/spank')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(message.author.username + " только что отшлепал " + user.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((user.toString() + " получил шлепок! от " + message.author.toString()))
            .setFooter(`Это должно быть больно ._.`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          };