// This line MUST be first, for discord.js to read the process envs!
require('dotenv').config(); 
const Discord = require("discord.js");
const client = new Discord.Client();
const math = require('mathjs');

client.on("ready", () => {
	client.user.setActivity("tiểu thư Luxen", {type: "WATCHING"}) 	
  console.log(`Mirianne đã sẵn sàng, với ${client.users.size} users, trong ${client.channels.size} channels của ${client.guilds.size} guilds.`); 
});

client.on("message", async message => {
  if (message.author.bot) return;
  // The process.env.PREFIX is your bot's prefix in this case.
  if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  // This is the usual argument parsing we love to use.
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // And our 2 real basic commands!
  if (command === 'blah') {
    message.channel.send('Meh.');
  }
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
        return message.channel.send(`Thưa ngài <@` + `542895780944412688` + `> , <@` + `757256213984706692` + `> có người cần sự hiện diện của ngài`);
      }
      if(message.content.toLowerCase() == 'nam' && message.author.id !== '320103804248784896'){
        return message.channel.send(`Thưa ngài <@` + `320103804248784896` + `> có người đang cần ngài`);
      }
      if(message.content.toLowerCase() == 'skai' && message.author.id !== '827910536569421846'){
        return message.channel.send(`Gọi ngài <@` + `827910536569421846` + `> ạ`);
      }
      if(message.content.toLowerCase() == 'kuro' && message.author.id !== '429095688228438017'){
        return message.channel.send(`Triệu tập ngài <@` + `429095688228438017` + `>`);
      }
      if(message.content.toLowerCase().startsWith('miriping')) {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! độ trễ là ${m.createdTimestamp - message.createdTimestamp}ms （=´∇｀=）`);
      }
    if(message.content.toLowerCase() == 'miridatabase'){
      const embed = new Discord.MessageEmbed()
      .setDescription("[Genshin Impact Wiki/Database](https://genshin.honeyhunterworld.com/)\n" + 
                      "[Interactive Map EN](https://mapgenie.io/genshin-impact/maps/teyvat)\n" +
                      "[Interactive Map CN](https://yuanshen.site/)\n" +
                      "[Promo Codes](https://www.gensh.in/events/promotion-codes)\n" +
                      "Lịch [1](https://genshin-center.com/planner) [2](https://seelie.inmagi.com/)\n" +
                      "Tính DMG [1](https://genshin-center.com/calculator) [2](https://genshinimpactcalculator.com/genshinCalc.html)\n" +
                      "[Shop Ẩn](https://ptb.discord.com/channels/486201690140180491/771736820777222155/791794037660450856)\n" +
                      "[Giả Lập Domain Drop](https://genshin.cc/artifact-rng)\n" +
                      "[Phòng Thủ của quái](https://ptb.discord.com/channels/486201690140180491/771736820777222155/786973188424204318)\n" +
                      "[Xếp Hạng Artifacts](https://drive.google.com/file/d/1bj-AVFkjZqFcop9NgkjWxnF8CrbkYHM9/view)\n" +
                      "[Đủ thể loại Teambuild, Tier, Mechanic, vv](https://docs.google.com/spreadsheets/d/1s0G2SDIOp9WB7NRn3ABoRgsS_Qjid46g1-BswFrbTFY/edit#gid=2093095892)"
      )
      message.channel.send(embed)
    }
	const args2 = message.content.slice(prefix.length+4).trim().split(/ +/g);
         if(message.content.includes('Miricalc')){
         	if (!args2[0]) return message.channel.send('Hãy nhập phép tính');
		    let resp;
		    try {
			resp = math.evaluate(args2.join(' '));
		    } catch (e) {
			return message.channel.send('Hãy nhập phép tính hợp lệ');
		    }

	 	   const embed = new Discord.MessageEmbed()
			.setColor(0xffffff)
			.setTitle('Máy Tính')
			.addField('Nhập', `\`\`\`js\n${args2.join('')}\`\`\``)
			.addField('Kết quả', `\`\`\`js\n${resp}\`\`\``)
	  	  message.channel.send({embed})
   	}
});

// There's zero need to put something here. Discord.js uses process.env.CLIENT_TOKEN if it's available,
// and this is what is being used here. If on discord.js v12, it's DISCORD_TOKEN
client.login(process.env.TOKEN)
