const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "94776617313"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="mathale,colombo,sri lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN;3000@cluster0.t1wsjiv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BxXB834YgV8JorX5tCDEEM";
global.website=process.env.GURL || "https://chat.whatsapp.com/BxXB834YgV8JorX5tCDEEM" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,94776617313";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94776617313";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94776617313";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94776617313";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94776617313,94776617313";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_41_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY3LFxuICAgICAgICA1NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2LFxuICAgICAgICA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRmx3ampCQnhKLytBeG95MTQ1RmUzYnlQNVBJc3FnU0hqYVBuQTZEdHFCWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSjRlZjh2dG1RWUdTQjdIVm9kNUZod1wiLFxuICBcInBob25lSWRcIjogXCJkMzIwYzBhMy03ZDU3LTRjZmUtOTMxNC1jZmI3ZDQ2ZmY4MDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMjUxLFxuICAgICAgNzIsXG4gICAgICAxOTAsXG4gICAgICAxMDYsXG4gICAgICAxNDksXG4gICAgICAyMDEsXG4gICAgICAxNzcsXG4gICAgICAyNCxcbiAgICAgIDI0MyxcbiAgICAgIDIxOCxcbiAgICAgIDgsXG4gICAgICAxNzQsXG4gICAgICAyNDIsXG4gICAgICAxODAsXG4gICAgICA5MCxcbiAgICAgIDI0MSxcbiAgICAgIDE3OCxcbiAgICAgIDE2MixcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICA5NSxcbiAgICAgIDE3MyxcbiAgICAgIDE0NixcbiAgICAgIDEwNCxcbiAgICAgIDY2LFxuICAgICAgNjYsXG4gICAgICAyMzksXG4gICAgICAxNTIsXG4gICAgICAxMTEsXG4gICAgICAxMjYsXG4gICAgICAxMjEsXG4gICAgICAxMTYsXG4gICAgICAzOSxcbiAgICAgIDg1LFxuICAgICAgMTE4LFxuICAgICAgMTExLFxuICAgICAgMTc3LFxuICAgICAgNSxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pHN2hhMENFSm1WMXJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQi94OU0rV0pGOTBRWVZlZVlnUmY2ZWVsOE1QL2VyN1RPUW5CT0FRU1ZGWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQOERORGhaOFdwWXZySG0zdnRwQVpoT2Rab0pXWGtnS1FHTFUxaU9pY2hxZEJ2d0diME5ubDlmZ1VNK3VXUDk5SGl0Y3kvL0tVOGJhWTlmbkpjUjFDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4SmRrYUdpSC9xUDZnbG5zQUF4VG5HQ3kweVBXVTAvamxjRzdsYnNCazZUTFh1c3pjOWhURmxPTTliQkd6ZnpuMGtSMk9ici9BRU80V0hDYTFxbkpqdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc2NjE3MzEzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMjYxNzYxMDI0MjMxOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTmFkdW4gS29sbGEg4p2k77iP4oCN8J+puVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzY2MTczMTM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjg4MjA3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF6dFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXp0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTEhNT1ZqcXBNenNzS05US0lVeGw3RzFWVkV3dkJ3K2hvVDVOS1RVOUd1ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MzEzMzIyNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjg4MjA3Njg1M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "Nadun" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "KoLLa",
  packname: process.env.PACK_NAME || "❤️",
  botname : process.env.BOT_NAME  || "KoLLa",
  ownername:process.env.OWNER_NAME|| "Nadun",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
