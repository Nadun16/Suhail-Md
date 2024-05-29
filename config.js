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


global.devs = "94776617313" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,94776617313";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94776617313";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94776617313";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94776617313";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94776617313,94776617313";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_25_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgNzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTksXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVL3lwYUhsUnovRTJGa0xiektOV1FhMHREMXkraFk3Tkh5MnF5TzBBMHpFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc2NjE3MzEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUM5QTRDMDc0RDQyNTY3NDRENlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwMDM1MDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM21BQk54T01UYlNGMjRScTZubE02QVwiLFxuICBcInBob25lSWRcIjogXCIyYjBhZGZhNS1mMGI0LTQ4MmYtODViOS00MzA0NmFlNzlmZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxMjcsXG4gICAgICA2NCxcbiAgICAgIDk5LFxuICAgICAgMjI1LFxuICAgICAgMjE0LFxuICAgICAgODEsXG4gICAgICAxMTYsXG4gICAgICAyMjcsXG4gICAgICAxMjMsXG4gICAgICA3NCxcbiAgICAgIDIxNyxcbiAgICAgIDc1LFxuICAgICAgMjIwLFxuICAgICAgMjgsXG4gICAgICA1NixcbiAgICAgIDIxNSxcbiAgICAgIDI0MixcbiAgICAgIDMyLFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDQzLFxuICAgICAgMTY2LFxuICAgICAgMTcxLFxuICAgICAgMTg4LFxuICAgICAgMTY2LFxuICAgICAgMjI4LFxuICAgICAgMjksXG4gICAgICAxMixcbiAgICAgIDIwNixcbiAgICAgIDQzLFxuICAgICAgMTgyLFxuICAgICAgMjMyLFxuICAgICAgMjM1LFxuICAgICAgOTksXG4gICAgICAyNixcbiAgICAgIDI5LFxuICAgICAgMTI0LFxuICAgICAgMyxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xqOXhwWUVFT2JKM2JJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQi94OU0rV0pGOTBRWVZlZVlnUmY2ZWVsOE1QL2VyN1RPUW5CT0FRU1ZGWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqWXhmWk5JWkhRNXZvbHpRZkNJV2JWUEJXaWNsSlNiOTRNWDc1SFd4akx1QkpRN1pZTCttN0VBb1hwZGlXNW1YZmRkUW5XejJIRTNHWUdhVVFpQW1EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUdzl5Wm1RZUg3NFdTV09RTktKd1BRcFE5SHN1V0l6TTdNbFZsQVRlSzBRY09EUmVTTFBycldUS01IeHNsc08vQ1lYeXlNTXFnNENuQkxITTRncjBnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc2NjE3MzEzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMjYxNzYxMDI0MjMxOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTmFkdW4gS29sbGEg4p2k77iP4oCN8J+puVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzY2MTczMTM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzAwMzQ5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU8yL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzJfXy5qc29uIjogIntcImtleURhdGFcIjpcIjJ1dkhoaGtUSTJkSXAzdHJEaGhkWmFjVzIvam5XY2dKSXRJQTBaRGNuVlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEyMTA0MjEwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MDAzNDk3ODAxXCJ9Igp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
