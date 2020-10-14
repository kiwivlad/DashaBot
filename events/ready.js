const { client, config }  = require("../index.js");

  client.on("ready", () => {
      console.log(`Бот работает под ником: ${client.user.tag}!`);
	  client.user.setActivity(`Shadow | s!help`,{ type: 'WATCHING'})
 });