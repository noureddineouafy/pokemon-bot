import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['212605784394', 'Noureddine ouafy bobiza', true],
  ['212605784394', 'Noureddine ouafy bobiza', true], 
  [''] 
] //Number of owners

global.mods = ['212605784394','212605784394'] 
global.prems = ['212605784394', '212605784394', '212605784394']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'BOBIZA BOT'
global.premium = 'true'
global.packname = 'BOBIZA-BOT-1ST MOROCCO BOT' 
global.author = '@instagram.com/noureddine_ouafy' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/noureddine_ouafy\n' 
global.dygp = 'https://chat.whatsapp.com/BibVE6tUICp3qOm2a1Ur8f'
global.fgsc = 'https://github.com/Guru322/GURU-BOT-V1' 
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.dbase = 'mongodb+srv://guru:guru@cluster0.qpggl6x.mongodb.net/?retryWrites=true&w=majority' //ADD YOUR MONGODB BY CHANGIMG IT

function _0x47f5(_0x249226,_0x13bdac){var _0x11c7f7=_0x11c7();return _0x47f5=function(_0x47f5cb,_0x230633){_0x47f5cb=_0x47f5cb-0x170;var _0x190b20=_0x11c7f7[_0x47f5cb];return _0x190b20;},_0x47f5(_0x249226,_0x13bdac);}(function(_0x2d6176,_0xf4d68a){var _0x551e90=_0x47f5,_0x4ff671=_0x2d6176();while(!![]){try{var _0x372112=-parseInt(_0x551e90(0x177))/0x1*(parseInt(_0x551e90(0x172))/0x2)+parseInt(_0x551e90(0x174))/0x3*(-parseInt(_0x551e90(0x175))/0x4)+-parseInt(_0x551e90(0x170))/0x5*(parseInt(_0x551e90(0x17b))/0x6)+-parseInt(_0x551e90(0x179))/0x7*(parseInt(_0x551e90(0x176))/0x8)+-parseInt(_0x551e90(0x178))/0x9+-parseInt(_0x551e90(0x17a))/0xa*(parseInt(_0x551e90(0x17c))/0xb)+parseInt(_0x551e90(0x173))/0xc*(parseInt(_0x551e90(0x171))/0xd);if(_0x372112===_0xf4d68a)break;else _0x4ff671['push'](_0x4ff671['shift']());}catch(_0x1c64bd){_0x4ff671['push'](_0x4ff671['shift']());}}}(_0x11c7,0xc71e9),global['wait']='*🔥\x20_المرجو\x20الانتظار\x20قليلا\x20جاري\x20تلبية\x20طلبكم..._*\x0a\x0a[■■■■■■■■■□]\x2090%\x20\x0a\x0a\x20\x20instagram.com/noureddine_ouafy');function _0x11c7(){var _0x3264d8=['1252117wHyMsD','1456803zidfBN','663439wfcEaf','18910pQsRjM','98988sUcOmQ','7249wabjCY','465TOhcZU','26HDKGeE','2OALVwM','39389304sRfWln','161961yRqHRa','52HLwTjh','72XqZjgp'];_0x11c7=function(){return _0x3264d8;};return _0x11c7();}
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
