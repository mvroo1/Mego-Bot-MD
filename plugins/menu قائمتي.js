let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/6f5728ffb36e986b957f6.mp4'
  let { name } = global.db.data.users[who]
  m.react('👑')
let str = `                  ✥━─━⌬ 𝙼𝚅𝚁𝙾 𝙱𝙾𝚃 ⌬━─━✥
【..≼قــســم المطور≽..】
                   ⋄━───═◞⬪👑⬪◟═───━⋄

*👑⃝✨⤺┇❯ بان⌉*
*👑⃝✨⤺┇❯ بانفك⌉*
*👑⃝✨⤺┇❯ بانشات⌉*
*👑⃝✨⤺┇❯ بانشاتفك⌉*
*👑⃝✨⤺┇❯ حطهابروفايل⌉*
*👑⃝✨⤺┇❯ ضيفالماس⌉*
*👑⃝✨⤺┇❯ ضيفاكسبي⌉*
*👑⃝✨⤺┇❯ اعاده⌉*
*👑⃝✨⤺┇❯ اخرج⌉*
*👑⃝✨⤺┇❯ ادخل⌉*
*👑⃝✨⤺┇❯ تهكير⌉*
*👑⃝✨⤺┇❯ تنظيف⌉*
*👑⃝✨⤺┇❯ الامردا⌉*
*👑⃝✨⤺┇❯ البلوكات⌉*
*👑⃝✨⤺┇❯ فكالبلوك⌉*
*👑⃝✨⤺┇❯ بلوك⌉*
*👑⃝✨⤺┇❯ بريم⌉*
*👑⃝✨⤺┇❯ حذف_بريم⌉*
*👑⃝✨⤺┇❯ المميزين⌉*
*👑⃝✨⤺┇❯ تسريع⌉*
*👑⃝✨⤺┇❯ نشر⌉*
*👑⃝✨⤺┇❯ اعدام⌉*
                    ✥━─━⌬ *𝙼𝚅𝚁𝙾 𝙱𝙾𝚃* ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['قائمتي' ,'قايمه','القايمه']
handler.rowner = true
export default handler
