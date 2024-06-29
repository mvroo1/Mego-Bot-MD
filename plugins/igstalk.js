/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}ادخل اسم مستخدم الانستقرام لتنزيل القصص.\مـــثــال\n*${usedPrefix + command} mrwbryh*\n\n𝙀𝙉𝙏𝙀𝙍 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙎𝙏𝙊𝙍𝙄𝙀𝙎\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} mrwbryh*`

hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', wm, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});

let info = `💖 *تعرف على الجديد وتذكر أن يكون لديك الإصدار الأحدث.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['『قــســم الـبـحـث و التـحـمـيـل🇾🇪🫀🇵🇸』🎞', '#التحميلات'],
['『جـــمــيــع الـــمـــهـام🇾🇪🫀🇵🇸』📜', '.المهام'],
['『الـــاوامــــر🇾🇪🫀🇵🇸』📂', '/اوامر']
], m,)  
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'انست' ]
handler.limit = 3
handler.exp = 87
export default handler