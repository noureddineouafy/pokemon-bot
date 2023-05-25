import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*التحميل من منصة سبوتيفاي*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists, preview_url } = json2.result
let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒\n┬\n├‣✨ *𝚃itre:* ${title}\n┴\n┬\n├‣🗣️ *artiste:* ${artists}\n┴\n┬\n├‣🌐 *lien*: ${link}\n┴\n┬\n├‣💚 *lien de telechargenent:* ${preview_url}\n┴`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
await conn.sendFile(m.chat, preview_url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch (e) {
throw '*هناك خطأ ما يبدو انك لم تكتب اسم المغني بشكل صحيح اذا حذثت معك نفس المشكلة تواصل مع صاحب البوت*\n'
}}
handler.command = /^(spotify|fly|mul)$/i
handler.limit = 4
export default handler