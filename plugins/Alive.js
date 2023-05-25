import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───[BOBIZA BOT]───╮

*Thank you for choosing Bobiza-MD-v1! 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
