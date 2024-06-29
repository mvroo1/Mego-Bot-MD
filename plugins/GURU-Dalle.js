import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*يقوم هذا الامر بصناعه صوره ب الذكاء الاصطناعي *\n\n*مثال للأستخدام (لضمان صوره دقيقه اكتب ب الانجليزيه)*\n*◉ ${usedPrefix + command} بنت انمي جميله*\n*◉ ${usedPrefix + command} رجل يقود بيتزا*`;

  try {
    m.reply('*ثانيه الصوره بتجهز...*');

    const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);

    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*فشل إنشاء الصورة*';
    }
  } catch {
    throw '*أُووبس!  حدث خطأ ما أثناء إنشاء الصور.  الرجاء معاودة المحاولة في وقت لاحق.*';
  }
};

handler.help = ['صورهai'];
handler.tags = ['tools'];
handler.command = ['dalle', 'صورهai', 'ارسم', 'openai2'];
export default handler;
