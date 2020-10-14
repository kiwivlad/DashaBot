const { config } = require("../../index.js");
const Discord = require("discord.js");
const superagent = require("snekfetch");


        module.exports.help = {
            name: "pat",
            category: "Развлечения",
          description: "Позволяет погладить другого пользователя",
          usage: "Ник пользователя"
        }
          module.exports.execute = async (client, message, args) => {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомянуть кого-нибудь погладить!');

          superagent.get('https://nekos.life/api/v2/img/pat')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(message.author.username + " только что похлопал " + user.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((message.author.toString() + " похлопал " + user.toString()))
            .setFooter(`owo`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
        

          };