let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/3782975aafc54e78e9d0c.mp4'
  let { name } = global.db.data.users[who]
  m.react('🪩')
let str = `                  *⎔⋅• ┏╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┓ •⋅⎔*
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +201208386317*
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
*⌝ ╎قــســم الريــاكــشــنـات╎⌞*
*━─╾╃⊱✦⊰🪩⊱✦⊰╄╼─━*
> @منشن اي شخص تريد بعد كتابة الأمر. 😘
*⧉【🪩┋.تنمر】*
*⧉【🪩┋.حضن】*
*⧉【🪩┋.يبكي】*
*⧉【🪩┋.احضن】* 
*⧉【🪩┋.رائع】*
*⧉【🪩┋.قبله】*
*⧉【🪩┋.يلعق】*
*⧉【🪩┋.تربيه】*
*⧉【🪩┋.متعجرف】*
*⧉【🪩┋.ضرب】*
*⧉【🪩┋.يرمي بقوه】*
*⧉【🪩┋.مكسوف】*
*⧉【🪩┋.يبتسم】*
*⧉【🪩┋.موجه】*
*⧉【🪩┋.كفك】*
*⧉【🪩┋.كفك٢】*
*⧉【🪩┋.يأكل】*
*⧉【🪩┋.يعض】*
*⧉【🪩┋.حضن2】*
*⧉【🪩┋.كف】*
*⧉【🪩┋.قتل】*
*⧉【🪩┋.سعيد】*
*⧉【🪩┋.غمزه】*
*⧉【🪩┋.لمس】*
*⧉【🪩┋.رقص】*
*⧉【🪩┋.يستوعب】*
*✦═════ •『🔰』 ═════✦*
> و كذا تم قسم الرياكشنات استمتع بالبوت. 😘
> الـمطور:https://wa.me/201208386317
*⎔⋅• ┗╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┛ •⋅⎔*
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['رياكشنات']

export default handler