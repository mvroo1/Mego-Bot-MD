const axios = require('axios');

let handler = async (m, { conn, text }) => {
    try {
        let [, link] = text.match(/(https?|tg):\/\/(\S+)/) || [];
        if (!link) throw '❌ الرجاء إدخال رابط صالح.';

        let res = await axios.head(link);  // استخدام axios للحصول على الهيدر فقط
        let type = res.headers['content-type'];
        let size = res.headers['content-length'];

        m.reply(`🔗 نوع الرابط: ${type || 'غير معروف'}\n📏 حجم الرابط: ${size ? (Number(size) / 1024).toFixed(2) + ' KB' : 'غير معروف'}`);
    } catch (e) {
        console.error(e);  // تسجيل الخطأ لمزيد من التفاصيل
        m.reply('❌ حدث خطأ أثناء محاولة فحص الرابط.');
    }
};

handler.help = ['فحص الرابط'];
handler.tags = ['tools'];
handler.command = /^(فحص-الرابط)$/i;
handler.limit = true;

module.exports = handler;
