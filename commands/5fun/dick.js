const { config } = require("../../index.js");
const Discord = require("discord.js");
const superagent = require("snekfetch");


        module.exports.help = {
            name: "dick",
            category: "Развлечения",
          description: "Позволяет тыкать в учасника",
          usage: "Ник пользователя"
        }
          module.exports.execute = async (client, message, args) => {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомяните кого-нибудь, чтобы ткнуть!');

          superagent.get('https://nekos.life/api/v2/img/poke')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(user.username + " только ткнул " + message.author.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((user.toString() + " ткнул " + message.author.toString()))
            .setFooter(`rip`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          };