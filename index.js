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
});
client.on("message", async message => {
	if (message.author.bot) return;
	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
	const args2 = message.content.slice(process.env.PREFIX.length+4).trim().split(/ +/g);
    if(message.content.toLowerCase() == 'huk' && message.author.id !== '486068016128327682'){
        return message.channel.send(`Thưa cậu chủ <@` + `486068016128327682` + `>`);
      }
      if(message.content.toLowerCase() == 'thiq' && message.author.id !== '508956376974753803'){
        return message.channel.send(`Thưa ngài Thiq <@` + `508956376974753803` + `>, có người gọi ngài ạ`);
      }
      if(message.content.toLowerCase() == 'lox' && message.author.id !== '486068224333447168'){
        return message.channel.send(`Thưa ngài Lox <@` + `486068224333447168` + `> có người gọi?`);
      }
      if(message.content.toLowerCase() == 'lõ' && message.author.id !== '486068224333447168'){
        return message.channel.send(`Ông Lõ <@` + `486068224333447168` + `> có người gọi`);
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
      if(message.content.toLowerCase() == 'meo' && message.author.id !== '501995663840509964'){
        return message.channel.send(`<@` + `501995663840509964` + `>-san~`);
      }
      if(message.content.toLowerCase() == 'mirinewember'){
        return message.channel.send(`zF_TXN
B9pU1z
QetboE
1PYVB3
FLcoAt
O5I-vp
E2-IOK
9tAhP8
RdgsyD
9epdAg
1LY-AK
JEHlGd 
bAdjmX
FPyAA3
AAn4kD
nR37nY
LftDf8
pNxfxK
9Qt4Je 
E_aWuT 
zqYnnU 
o5Sa2r 
PQURtx 
Y3CnXi 
Yy1DRA
9rfXuc
i1p36k
ttvEU0
TGocb5
1gXnJH
g4Mh-f
j-8X_o 
OSiz_3 
tpU4uT 
mSqqMz 
Bj96ho
cVgLy4
xanW9r
mDbyN2
ETHROL
y_LLE9
5Psbnh
eiwSLh 
BKJfs1 
u1roB3 
U359-G 
EQhQiv 
WM2vzB
FF_z_Q 
1AvQCW 
FRN0w6 
8Mib8i 
x5Z3iZ 
nGqI9R 
05s8BF 
J0LNGs 
wsHI2N 
UYp1Qe
CCpHV6
-ZUaBf
7Bv_L3
aInpfb 
qtMne6 
-uqynb 
G3R6s6 
CV2R8m
Kd-c1q
P7RiIM
7rQ5OB
BJ9KTw
up6n_E
4XYnvC
gldEGI
U-k9_t
ixr0Am
tNc_C9
NROk2p
CuOY9z
A-85FG
1MDBr0
5pQOkU
9mGnXz
Bf9flA
KAp7z8
GBalWX
52cFaQ
uvK2FL
XpLile
8nVHvM
03XJTt
eSpXd3
Y-m7bT
ftNIWP
1Xhzay
`);
      if(message.content.toLowerCase() == 'ember'){
        return message.channel.send(`Ghlf5y
CJRny-
yXw4m1
05ymoV
3hxmsv
xOrmmk
qB-s1-
ppMbgf
IcijbL
ATTvKy
iat4Kx
owy9r7
xZN6sM
vqakMG
-ecEuO
OQz706
8gJS5r
fMEWSB
nEeA5f
jUS79F
4LTCiR
1) LWYj0s
2) jMxBxy
3) cvJc6
4) WQ3RJt
5) 60Nk6u
6) UYeTDY
7) AB-kRR
8) ACwT7e
9) 8v7ZE4 
10) sUBF8
11) GVo-dn
12) ti9hg4
13) 1lAGFX
14) G1WyuY
15) mIhiRM
16) K-iWlm
17) bWjwVz
18) ac2fzF
19) ifHcml
20) 9cZS44
21) 419gLT
22) ZqALd
23) kVvGFz
24) yAXL-a
25) F1SQnB
26) 2tOI7V
27) cAxFGJ
28) qP1KaA
29) rwNAKA
30) urj9vT
31) Z6iZQ7
32) QM7UGY`);
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
         if(message.content.includes('Miricalc')){
         	if (!args2[0]) return message.channel.send('Hãy nhập phép tính');
		    let resp;
		    try {
			resp = math.evaluate(args2.join(' '));
		    } catch (e) {
			return message.channel.send('Hãy nhập phép tính hợp lệ');
		    }
	  	  message.channel.send(resp)
   	}
	/*if(message.content.toLowerCase() == 'test'){
	    if(!message.guild) return;
	    if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return;
	    var colors = ['#ff0000','#ffa500','#ffff00','#008000', '#0000ff', '#4b0082', '#ee82ee', '#f46b38'];
	    for(let i = 0; i<= colors.length;i++){
	    var role = message.guild.roles.cache.find(role => role.name === "color4");
	    setInterval(() => {
		role.edit({
		    color: colors[i]
		})
	    }, 1000);
	  }
	}*/
});

// There's zero need to put something here. Discord.js uses process.env.CLIENT_TOKEN if it's available,
// and this is what is being used here. If on discord.js v12, it's DISCORD_TOKEN
client.login(process.env.TOKEN)
