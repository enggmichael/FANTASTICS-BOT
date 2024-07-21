const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255710268215";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2557xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255710268215";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "SUHAIL_04_22_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDkxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDczLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDkwLFxuICAgICAgICA1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxLFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImEzREpEWXd6ckZlWTVEMlJGc2kzL01ieGJUNFlYYXJ0aitVaFE2M2tHclU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJBQkJiLUdXUy1hYk1MYWZ1SXg3MVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjI0OGU5MDQtMjRhOC00NjRjLTlhOWMtMmE0MWMyNWZkMTM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgOTUsXG4gICAgICA4NCxcbiAgICAgIDkwLFxuICAgICAgMTc0LFxuICAgICAgMjE4LFxuICAgICAgNDMsXG4gICAgICA5NCxcbiAgICAgIDc0LFxuICAgICAgMTgxLFxuICAgICAgMjMyLFxuICAgICAgMjA0LFxuICAgICAgMTQyLFxuICAgICAgMTczLFxuICAgICAgMzYsXG4gICAgICA1MyxcbiAgICAgIDE5NyxcbiAgICAgIDIyNyxcbiAgICAgIDYxLFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDIwMSxcbiAgICAgIDc4LFxuICAgICAgNDAsXG4gICAgICAyMjMsXG4gICAgICA3MyxcbiAgICAgIDE5LFxuICAgICAgMTksXG4gICAgICAyNTQsXG4gICAgICAxMjEsXG4gICAgICAyMjgsXG4gICAgICAyMTAsXG4gICAgICA4MixcbiAgICAgIDU5LFxuICAgICAgMjksXG4gICAgICAzNCxcbiAgICAgIDI0NCxcbiAgICAgIDE0MyxcbiAgICAgIDI1NCxcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQNTJWODdDQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzEwMjY4MjE1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MzE1MDE0NTE5NjE0MDo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BlNjlQZ0RFSkNhOHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZExqTW4zQ1NTeE95WWtjVFVtSUZ0eXVPL1VqR09uVGRsdnpJNjRHMlpUVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4UjE4WjArbUpxY0N4Rm9VN1lDU2YzMlhZdGJpMkVZSmtPQ3NUc1ZBdFZKLytFOW05U2lwNGNyRmNwUUp5elpUMjBlcG84RDFnRmpKWWpQQnVqWFpEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtSENDVG1qZW43ZkR3eGVmUWR1NTlTMHVPSC9ZdXQvV0J1cXNEUlRjNEUyU2w1VVVmUG13NU4rYlVRakxyTTlnUXU1R3crVmRLRHUvSlB3Vy9kMnVBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3MTAyNjgyMTU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTM1NzY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
