let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => m.reply(`
DOWNLOADING APP :
 قسم تحميل التطبيقات
┏━━━━━━━━━━━━━┓

📥   .apks
📥   .apkdl
📥   .rexdl

┗━━━━━━━━━━━━━┛

GPTCHAT OPEN AI 
قسم الذكاء الإصطناعي
┏━━━━━━━━━━━━━┓

💻   .gpt4
💻   .ai
💻   .go

┗━━━━━━━━━━━━━┛
tutorial : https://fb.watch/kSkKbYI1Kd/?mibextid=Nif5oz
`.trim())
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'help','menu'] 

export default handler