const dir = [
'https://telegra.ph/file/0304a6867441e70f99a3d.mp4',
'https://telegra.ph/file/bf109580de41a9f794892.mp4', 
  
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  m.react('🫗');
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['عطشان', 'ماء'] 

export default handler
