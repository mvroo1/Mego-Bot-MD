let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/3782975aafc54e78e9d0c.mp4'
  let { name } = global.db.data.users[who]
  m.react('💎')
let str = `                  ✥━─━⌬ *𝙼𝚅𝚁𝙾 𝙱𝙾𝚃* ⌬━─━✥
  *≼🎞≽ قـسـم الاديت+الصور≤🖼≥╿↶*
⋄━───═◞⬪🧛🏻‍♂️⬪◟═───━⋄
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ طقم⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ طقم_اولاد⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ طقم_بنات⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ خلفيه⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ خلفيات⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ ميمز⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ بنت⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ ايديت⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ ايديت⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ايديت 2⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ ايديت3⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ ايديت4⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ ايديت5⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ ماء⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ لصديق⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ ايديت-مختلط⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ ايديت-اغنيه⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ دراغون-بول⌉*
*🧛🏻‍♂️⃝🇪🇬️⤺┇❯ بليتش⌉*
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
handler.command = ['الايديت']

export default handler
