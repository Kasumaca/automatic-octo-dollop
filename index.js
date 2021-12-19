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
      }
	if(message.content.toLowerCase() == 'miriember'){
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
	}
	if(message.content.toLowerCase() == 'miridunes'){
          return message.channel.send(`K9BFEp
i9G1hh
8EboDz
Tx1NfQ
7AQ2bI
fxKLj9
spjdre
fI6ciS
2ghHgb
QVr68R
6j4qiG
SDRToC
it09EW
XUnm8n
YADXIa
up0xyJ 
2mUzeU
C6RE00
kN4YI2 i or L
4xTQPW
1-f9bD
kbO8jv
M-dWJA
1abTMa
BIsGUK i or L
Obk2fr 
UP04BI i or L
-ipp82
qZtS9f
Y6sRsW
4B8_0t
5SzeFY
SszEg0
XwV7xm
7OYAi`);}
	if(message.content.toLowerCase() == 'mirinimbus'){
          return message.channel.send(`2)GcKqsG
3)Lcbrjj
4)eHIE79 (i or l)
5)-wNuce
6)sDm3SJ
7)9RSkgw
8)XB1im0
9)U9KJxL
10)4Kj-Iy
11)pU9Vkc
12)bJYKys
13)6G4t-6
14)zTwbtJ
15)Eu9R_6
16)_xBiCo
17)XpMg8o
18)qVTdhP
19)x5gvUI (i or l)
20)AFJ84W
21)fb0JDg
22)FMust7
23)-VQy-p
24)WR4d7x
25)urX2rD
26)uBAwdW
27)gje4UM
28)fTgPQG
29)k3QbGc
30)9YImuH (i or l)
31)v-v-Aj
32)yQobny
33)DUAvPN
34)NM_qTH
35)9baNQZ
36)gI7Nnv (i or l)
37)0TSK2t (O or 0)
38)C0mPKs (O or 0)
39)8OqgeW (O or 0)
40)R1xvyC
41)I_N3UG (i or l)
42)AkGFpN
43)AWRuCJ
44)JOtklM (i or l)
45)_8UGei
46)ssOQq6
47)gcYcP2
48)KbIzPZ (i or l)
49)K2zyUV
50)K4QiaT
51)-M_va4
52)9Kb5wM
53)Q_aCLD
54)EMYZ6x
55)sg04vb (O or 0)
56)pHmpQ2
57)mLgmYE
58)oKL2Si
59)Y9wA3x
60)xOFOiZ
61)jzJcw9
62)VI-d7l (i or l)
63)0WfhIJ (i or l)
64)8UZSyG
65)K6L3us
66)P_r9zF
67)0nX3P3 (O or 0)
68)_y1LwB
69)sN1kVD
70)pqwsiP
71)bUqPot
72)ERGkE1
73)nzfqjH
74)arvLxY
75)88SquL
76)Jl6srs (i or l)
77)_wxVtz
78)Sxy7X4
79)z2RWHf
80)IzYLW5 (i or l)
81)S1OokY
82)D2L5RV
83)QDcs9G
84)YhQl9 (i or l)
85)-IVJB (i or l)
86)KBd34X
87)oe0SRf (O of 0)
88)OBRtNZ
89)4S7o3Y
90)fRijNB
91)O7s061
92)sn66Qs
93)f3gnXO
94)_IwdTr (i or l)
95)F_euOc
96)nwTieM
97)Dvgfpq
98)uXQihc
99)JfAusH
100)m3qHI4 (i or l)`);}
	if(message.content.toLowerCase() == 'miriwar'){
          return message.channel.send(`1BFze5
25pT2L
2yqicv
3C_0Qu
-4mycE
6-g1ej
7Qs27m
8GpNKH
8LApEL
adzBVR
avXodn
BkSTEN
c-KzVK
d_Z92O
dCkx7C
DPyLHT
dttQxB
EpefEq
eWWqY9
feub3n
g4TdUa
Hd67rr
iQqtG6
JC_QNh
JcuP0p
JQCw1U
kRVY6O
M3NMer
MEwUFM
mNLLzt
MxW_Ue
nqVJDE
PcMCED
pgFPqY
RbH1SI
RfuWaj
rpbRMn
sBKQMV
SdUXCh
S-frMS
SNRTm4
TcCnZ9
Tcp7JK
uUT_br
v1eQNa
V7pKDX
VegfVx
VR-sWX
Vs1Bi-
vsGhkE
wFxr45
WulgQQ
xnejBK
y8mMoB
yBTzSq
Yu7t-U
yYRgjp
Z2o3oE
ZeQUVL
zrA8gY`);}
	if(message.content.toLowerCase() == 'miriobelisk'){
          return message.channel.send(`9FLsXv
9qDYIw
9UQy3j
AB7FiP
ahNKzW
aHOoBk
B2LOMB
BGjqnr
dfLXmo
dzuHJH
YCWCKq
YHPMt6
yusZp4
Z6DKqb
2QLKJM
2RAchb
2X0dpj
3D9E_U
3RfgxS
3UKFJ4
4Akvn2
7oC-He
8hqjWO
9ae9ra
zAjXSn
ZrTDOz
E0Xgdq
eb0Ec8
EeCmWi
fVRtOq
fXi1h1
GtZN40
H2-a28
HJcnLy
HRDox5
JYKuIK
K3TtzE
KhPK0U
Kuh1H6
kuKLv0
Kya-NL
m8Vxcg
maiboK
MAiHFD
miPpJr
mqeRUI
mrmXGS
msKaY3
mw3qEF
nSw_QA
oi4Dbc
pBA7Uz
Pd6ZsH
PiWPwp
QIjafV
QUOnXE
r92PyJ
rL46J-
RXdQ7M
S1p32U
SfhiuM
SflGW1
SjDaMf
T6DWj8
TCEg7f
tjWENr
tyJq2t
UKvX7q
uNYdua
v2HnyC
VM2XQV
VvHb5B
vXnEWS
wphj_x
XbTF7h`);}
	if(message.content.toLowerCase() == 'mirihaze'){
          return message.channel.send(`Y1TA3i
mjmSgZ
LVFJJ3
aZbEfQ
YGC5JO
Xs3zph
mhLSN2
FVnJBP
VKrCqE
md968J
kTRGxF
3mtFJr
wkG5J0
k7zvWY
tYO9r9
paT6BH
VZGys6
TNgFX5
8X89GZ
TkWWzW
rMCxM1
jsee7g
BJoyow
wa_eWb
Pgg5bo
_ZnC6M
pk0XPb
ATmccf
7s26yN
B8xJ5x
k53Vi
sG9OYx
e9sFDO
uLDetw
EkUUbB
_cmaW6
fbnWzR
dZcX2o
2nSarb
d-4kG9
BRDto9
kaPKB3
btSpNE
Zd8BTH
8eyuSN
Ha6eOT
EENrUp
gqNCH0
EDOMQH
9V4QNl
J5rb8d
Rw62v
P3_3tR
Y1TA3i
Xs3zph
B8xJ5x
k53Vi
sG9OYx
e9sFDO
btSpNE
8eyuSN
gqNCH0
EDOMQH
9V4QNl
J5rb8d
Rw62v
gFzkM0
8FDTck`);}
	if(message.content.toLowerCase() == 'miritempest'){
          return message.channel.send(`GXPSIR
0qTMob
m5SOxS
qaHN3I
J9MA16
Fm17bC
c82zhH
BtbQKO
bJHokK
A0oE8Q
mQjv7_
APwkMy
3lpd6u
rOFDhE
tYkDLR
ZPXGUi
1NulEe
-TsdLs
abzs9S
Wqm5ss
mV3kA7
IozwaC
6YUjHl
5JVhKu
DK8iOh
9ZKpjJ
xfcqR1
AHgKYA
db4Ghk
doMwa7
EEPzI-
GMqiS3
kLGyQc
wQ99BY
3SftE0
S9xSt4
FQnsJJ
rVnCG3
09-Xu9
Dz8bqC
522B-6
4AUEPj
ouDCuk
jS7En
3VGEBg
Lz8FET
Q2Wx9C
YKaaS
F3OELg
eF_9qZ
0aQTFt
P5rUPZ
QSTYOf
G-4AQJ
2UZCY4
fri1K-
mnHrJ0
q1ehQS
BmuPMt
a1V8Lo
mNfOlw
1Q371v
0Rrwfp
m4ebgM
`);}
	if(message.content.toLowerCase() == 'miritraining'){
          return message.channel.send(`wDTZy5
rZQ9OL
j-VOaw
TuZHY2
IHFiUm
m-E3tV
w0rZG1
KcxLG
IfPmNI
tNf7pp
Jqgrcs
1SOdmO
uEgyyb
GGdMRx
5Jb6_W
2Tm-wH
WSz2Ba
PY4yx9
1)Jgvoy2
t_eA-G
r_veyi
0HL6PW
wUo44s
Ain7EW
BAYp0s or BAYpOs
LPXzsK
fw4ZFz
10)g8QPTE
vpEi-5
jUZdcY
IyDyFV or lyDyFV
nL_k-E
sZ7S4K
xMeWXM

atYquM
j58zIn or j58zln
WwpNHp
20)pS-Wkh
WKK6uv
Qr3GDm
_Oikhj
xn6J6m
yKoBkp
7CEM8-
id7Dcw
BmN31a
MiSLm
30)szHqkN
15z-zA
9XXJqz
E41StY
j2AinA
3Vcq0t
Hjryav
T86inG
sTn06Q
34Fj0I or 34Fj0l
40)sDTRYx
OToSX3
R47obo
dsY1NB
Qk-ikk
Mtmtf3
auhpf2
jX2Tt9
PmPGQT
TUUF58
50)dpwQFv
oIXEoC or olXEoC
TzqdHw
HJJWZY
P6q9UE
y09eiQ
yo0jBP
pW8FAt
ajDDO
q0hZHm
60)SkbWEc
F2XxHM
ti3TkD
9bXwWt
F6fVrS
n9vvMZ
iUkF4Q
pnIdeo or pnldeo
TDMSa2
GK7S4Z
70)cxjXM-
GTG13i
XF2ni8
fzRmww
rbui-I or rbui-l
8iqt-M
uTBPFZ
0ULiyd
jhLPZe
kNuugv
80)6m6rY1
Z0Oyn4
hamodG
s0RvVb
k5EfRj or kSEfRj
O2aEcw
AoOI-b or AoOl-b
Xdzdzy
VRGL7j
PB7is-
90)IQbGNQ or lQbGNQ
TewYM9
WehYLx
XwLFkA
1z8bNX
xxlgeM or xxIgeM
94dHP5 or 94dHPS
u7oWxb
8SJaZ8
90DibT
FbSsfQ
LC9MzH
100)56I97B or 56l97B`);}
	if(message.content.toLowerCase() == 'miriforest'){
          return message.channel.send(`oTNmov
Pg7OJ1
c34a5l
eSx7Bq
kHotIr
j3pfj
RY6dzS
KkS7Xo
CrLuTU
QUMp-q
TN1qmh
yAw26R
ar5Nnr
DG2hfJ
nVUcVd
rQAjrb
2eTvXy
3BbkGL
tEDIPc or tEDlPc
LuOBNm
I3YaH4
Li569F
bL1-C2
85LbvI
jFRnbY
SAHzL1
S4dSCt
o0o1XD
EaMtjZ
o036Sy
JubPfT
zz-iCa
F27fW1
BX1ikD
FYL_GN
gnRrGo 
caPPDR
PVpaGV
d_mRqn
j7dsFc
y0dxLR
7v25Sw
WH7qTn
PLFMI1 i or L
1zrsE2
2bflbr or 2bfIbr
KX7I_G  or KX7l_G 
ONZryZ
7unMdG
0K7WHy
zERGv5
aMzXL2
a56-Bs
o996qx
0mcG0p
U328t1
LfoJLf 
Zz2Qcz
GLF7Rc
CET7_A
BYSbyn
EgNR1j
I-EVt1 i or L
2g8_bU
TiJVpb 
kk-YC7
0iTJiz
A2gA3U
2g8_bU
_xZvsJ
QHIPEO or QHlPEO
Rj5WKC
qHKYRF
5XpORC
SuuG2y 
wne0ro
8AJHwl or 8AJHwI
mJxGb2
_721_c
QsFuXN
YFkTdw
R0MNoK
X0z-s4
hCkwoN
tvhm_6 
vg_URs
PmIqJb or PmlqJb
eWhbid
0yfnFI or 0yfnFl
FBTp0z
22PtCt
_D4tTV
6QiN5K
SzmTcx
5bfX9p 
XHwFuN
NuLxMG
gTWhds
tFkJmA
TJX6_F
zFUr3
hU-5pm
OVTHnn
X-5IYT or X-5lYT
HUqpZX 
-TFxeU
1uO9-k
4DzZdT
L5Zot
YWcqXs
3SU6Ng
TOT1W2
D2S1s-
P_91
Iec28 or l3c38`);}
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
