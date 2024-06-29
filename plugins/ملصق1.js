import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0

let nombre = '🎃 𝗔𝗡𝗜𝗠𝗘 𝗕𝗢𝗧 🎃'
let nombre2 = '𝜜𝑴𝑹𝑶 𝑲𝑯𝜜𝑳𝑰𝑫'

const s = [
'https://telegra.ph/file/108a277206fb25ef1e8b4.jpg',
'https://telegra.ph/file/8335534106daa1b103109.jpg',
'https://telegra.ph/file/53b9acf2a7b83dbcce429.jpg',
'https://telegra.ph/file/c73c32aa0966d92789a33.jpg',
'https://telegra.ph/file/47e08681eee2782683727.jpg',
'https://telegra.ph/file/f8e57afecb5ffedb78dac.jpg',
'https://telegra.ph/file/7c75dd22d3be0d3bd779b.jpg'
];  

let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
}
handler.customPrefix = /غوكو|سون غوكو|عمرو|غرانولا/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))