import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙇𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝘽𝙐𝙎𝘾𝘼𝙍\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Goku*\n\n𝙏𝙔𝙋𝙀 𝙒𝙃𝘼𝙏 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝙎𝙀𝘼𝙍𝘾𝙃 𝙁𝙊𝙍\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Goku*`, m)
let pp = './media/menus/Menu1.jpg'
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({
// header,
title,
url,
description
}) => {
return `*${title}*\n_${url}_\n_${description}_\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
}).join('\n\n')

let info = `💖 *تعرف على الجديد وتذكر أن يكون لديك الإصدار الأحدث.*\n\n💝 *تعرف على الجديد وتذكر أن يكون لديك الإصدار الأحدث.*
  `.trim()
conn.sendHydrated(m.chat, info, wm, pp, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['『قــســم الـبـحـث و التـحـمـيـل🇾🇪🫀🇵🇸』🔎', '#التحميلات'],
['『جـــمــيــع الـــمـــهـام🇾🇪🫀🇵🇸』📜', '.المهام'],
['『الـــاوامــــر🇾🇪🫀🇵🇸』📂', '/اوامر']
], m,) 

try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^go|googlef?$/i
handler.exp = 40
handler.exp = 3
export default handler