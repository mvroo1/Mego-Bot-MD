let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/3782975aafc54e78e9d0c.mp4'
  let { name } = global.db.data.users[who]
  m.react('⚡')
let str = `                  *⎔⋅• ┏╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┓ •⋅⎔*
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +201208386317*
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
*· • • ━ ╃✦⊰ ⌝🗿⌞ ⊱✦╄ ━ • • ·*
*⌝╎قــســـم الــتـصــامــيــم╎⌞*
*━─╾╃⊱✦⊰🌟⊱✦⊰╄╼─━*
*⧉【⚡┋.تصميم】*
*⧉【⚡┋.تصميم1】*
*⧉【⚡┋.تصميم2】*
*⧉【⚡┋.تصميم3】*
*⧉【⚡┋.تصميم4】*
*⧉【⚡┋.تصميم5】*
*⧉【⚡┋.تصميم6】*
*⧉【⚡┋.تصميم7】*
*⧉【⚡┋.تصميم8】*
*⧉【⚡┋.تصميم9】*
*⧉【⚡┋.تصميم10】*
*⧉【⚡┋.تصميم11】*
*⧉【⚡┋.تصميم12】*
*⧉【⚡┋.صمملي】*
*⧉【⚡┋.صمم】*
*✦═════ •『🔰』 ═════✦*
> هاذه قائمة التصاميم اكتب الاسم الذي تريد تصممة بجانب الامر. 
> افضل الصلاه والسلام على سيدنا محمد ﷺ🌺. 
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
handler.command = ['تصاميم']

export default handler
