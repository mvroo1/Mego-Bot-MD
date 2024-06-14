let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/9ffe02eb52dd5a0fd3619.png'
  let { name } = global.db.data.users[who]
  m.react('✍🏻')
let str = `                 *┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 المطور 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ مرحبا ${name}*
*┃ ➤اسم المطور:𝜜𝑴𝑹𝑶 𝑲𝑯𝜜𝑳𝑰𝑫*
*┃ 👉🏻 فيما يلي بعض البيانات التي تخص المطور*
*┃ في حالة دعمك :𝟹*
*┃*
*┃ ➤ رقم المطور:* 
*┃ https://wa.me/967774318278*
*┃ ➤ بلد: اليمن* 
*┃ ➤ يعمل البوت بنظام: لينكس* 
*┃ ➤ متاح: 24 ساعه*  
*┃ ➤ قروب الدعم: https://chat.whatsapp.com/EbzeqqSjqsMI2oDrjSdT3g*
*┃*
*┃ 👉🏻 اذا كان لديك مشكله راسلني علي رقمي*
*┃ تعال فقط اذا كان لديك مشكله فقط*
*┃ wa.me/+967774318278*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━* 
                    *✥━─━⌬ 𝑮𝒐𝒌𝒖_𝒃𝒐𝒕 ⌬━─━✥*
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['مطور']

export default handler
