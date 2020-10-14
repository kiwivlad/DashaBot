const { config } = require("../../index.js");
const Discord = require("discord.js");
const superagent = require("snekfetch");

            module.exports.help = {
                name: "spay",
                category: "Развлечения",
              description: "Позволяет пощекотать пользователя",
              usage: "Ник пользователя"
            }
            module.exports.execute = async (client, message, args) => {
              //command
              const user = message.mentions.users.first();
              if(!user)
                  return message.reply('Упомяните кого-нибудь чтобы щекотать!');
  
              superagent.get('https://nekos.life/api/v2/img/tickle')
                  .end((err, response) => {
                const lewdembed = new Discord.MessageEmbed()
                .setTitle(message.author.username + " просто пощекотал " + user.username)
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setDescription((user.toString() + " пощекотал " + message.author.toString()))
                .setFooter(`._.`)
                .setURL(response.body.url);
            message.channel.send(lewdembed);
              })
              };