// This line MUST be first, for discord.js to read the process envs!
require('dotenv').config(); 
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	client.user.setActivity("tiểu thư Luxen", {type: "WATCHING"}) 	
  console.log(`Mirianne đã sẵn sàng, với ${client.users.size} users, trong ${client.channels.size} channels của ${client.guilds.size} guilds.`); 
});

client.on("message", message => {
  if (message.author.bot) return;
  // The process.env.PREFIX is your bot's prefix in this case.
  if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  // This is the usual argument parsing we love to use.
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // And our 2 real basic commands!
  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'blah') {
    message.channel.send('Meh.');
  }
});
client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase() == 'huk' && message.author.id !== '486068016128327682'){
        return message.channel.send(`Thưa cậu chủ <@` + `486068016128327682` + `>`);
      }
      if(message.content.toLowerCase() == 'thiq' && message.author.id !== '508956376974753803'){
        return message.channel.send(`Thưa ngài Thiq <@` + `508956376974753803` + `>, có người gọi ngài ạ`);
      }
      if(message.content.toLowerCase() == 'lox' && message.author.id !== '486068224333447168'){
        return message.channel.send(`Thưa ngài Lox <@` + `486068224333447168` + `> có người gọi?`);
      }
      if(message.content.toLowerCase() == 'huyz' && message.author.id !== '528365331639697419'){
        return message.channel.send(`Thưa ngài Huyz <@` + `528365331639697419` + `>, có người đang cần ngài hiện về`);
      }
      if(message.content.toLowerCase() == 'vim' && message.author.id !== '503219544907710467'){
        return message.channel.send(`Ngài Vim <@` + `503219544907710467` + `> có người đang gọi ạ`);
      }
      if(message.content.toLowerCase() == 'tiz' && message.author.id !== '542895780944412688'){
        return message.channel.send(`Thưa ngài <@` + `542895780944412688` + `> có người cần sự hiện diện của ngài`);
      }
      if(message.content.toLowerCase() == 'nam' && message.author.id !== '320103804248784896'){
        return message.channel.send(`Thưa ngài <@` + `320103804248784896` + `> có người đang cần ngài`);
      }
      if(message.content.toLowerCase() == 'skai' && message.author.id !== '513211252277772290'){
        return message.channel.send(`Gọi ngài <@` + `513211252277772290` + `> ạ`);
      }
      if(message.content.toLowerCase() == 'kuro' && message.author.id !== '429095688228438017'){
        return message.channel.send(`Triệu tập ngài <@` + `429095688228438017` + `>`);
      }

});

// There's zero need to put something here. Discord.js uses process.env.CLIENT_TOKEN if it's available,
// and this is what is being used here. If on discord.js v12, it's DISCORD_TOKEN
client.login(process.env.TOKEN)
