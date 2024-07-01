import { googleImage } from '@bochilteam/scraper'

var handler = async (m, { conn, text, usedPrefix, command }) => {

const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', ']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return conn.reply(m.chat, '🚩 *لن أعطي نتائج لطلبك*', m, fake, )

if (!text) return conn.reply(m.chat, `🎌 *سوف تحتاج إلى إدخال النص*\n\nمثال, !${command} مارو`, m, fake, )
m.react(done)

const res = await googleImage(text)
let image = res.getRandom()
let link = image

conn.sendFile(m.chat, link, 'error.jpg', `🚩 *الطلب:* ${text}`, m)

}
handler.help = ['gimage', 'imagen']
handler.tags = ['imagenes']
handler.command = /^(gimage|صوره|صورة)$/i

handler.limit = true

export default handler
