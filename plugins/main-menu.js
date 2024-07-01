//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/e7f49bd7c3aad2f429044.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `.`.trim() },
            footer: { text: `*𝙏𝙝𝙚𝙈𝙫𝙧𝙤-𝘽𝙤𝙩*`.trim() },  
            header: {
                title: `*⎔⋅• ┏╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┓ •⋅⎔*\n\n*◞❐نورت يا حب بوت مارو🤺🔥*\n\n*◞❐ تفضل القائمة يا  :* @${mentionId.split('@')[0]}\n\n*◞❐اسم البوت : بوت مـارو*\n\n*◞❐موقع التنصيب : heroku*\n\n*◞❐البوت يعمل في الخاص والجروبات*\n\n*◞❐يمنع شتم البوت*\n\n*◞❐لينك المطور : https://tiny.one/42kpap54*\n\n*⎔⋅• ┗╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┛ •⋅⎔*`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '【..≼قـائـمـه الاوامـر≽..】',
  						  		sections: [
  						  			{
  						  				title: 'List',
  							  	    highlight_label: '',
  						  		    rows: [
  						  		    	{
  						  		    		header: '【..≼قــســم الجروبات≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الجروبات≽..】',
  								    		  id: '.الجروب'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: '',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الاعضاء≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الاعضاء≽..】',
  								    		  id: '.الاعضاء'
  						  		    	}
  						  				]
  						        	},
  						  			{
  						  				highlight_label: '',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الانــمـــي≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الانــمـــي≽..】',
  								    		  id: '.انيمي'
  						  		    	}
  						  				]
                                    },
  						  			{
  						  				highlight_label: '',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الترفيه≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الترفيه≽..】',
  								    		  id: '.الترفيه'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: '',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الايديت والصور≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الايديت والصور≽..】',
  								    		  id: '.الايديت'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: '',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم التحويلات≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم التحويلات≽..】',
  								    		  id: '.التحويلات'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: '',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الادوات≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الادوات≽..】',
  								    		  id: '.الاداوات'
  						  		    	}
  						  				]
                                        },
                                    {
  						  				highlight_label: '',
  						  				rows: [
  						  			{
  						  		    		header: '【..≼قــســم الــتــصــامـيـم≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الــتــصــامـيـم≽..】',
  								    		  id: '.تصاميم'
  						  		    	}
  						  				]
                                        },
{
  						  				highlight_label: '',
  						  				rows: [
  						  			{
  						  		    		header: '【..≼قــســم الذكاء الاصطناعي≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الذكاء الاصطناعي≽..】',
  								    		  id: '.ذكاءاصطناعي'
  						  		    	}
  						  				]
                                        },
                                    {
  						  				highlight_label: '',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــسم الصــوتيـــات≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــسم الصــوتيـــات≽..】',
  								    		  id: '.الاصوات'
  						  		    	}
  						  				]
                                        },
                                    {
  						  				highlight_label: '',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الـتـحـمـيـلات≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الـتـحـمـيـلات≽..】',
  								    		  id: '.التحميلات'
  						  		    	}
  						  				]
                                        },
                                    {
  						  				highlight_label: '',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الـبـنـك≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الـبـنـك≽..】',
  								    		  id: '.البنك'
  						  		    	}
  						  				]
                                        },

{
  						  				highlight_label: '',
  						  				rows: [
  						  			{
  						  		    		header: '【..≼قــســم الـريـاكـشـانـات≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الـريـاكـشـانـات≽..】',
  								    		  id: '.رياكشنات'
  						  		    	}
  						  				]
                                        },

  						  			{
  						  				highlight_label: '',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــسم الـديـن≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــسم الـديـن≽..】',
  								    		  id: '.الدين'
  						  		    	}
  						  				]
                                        },
                                    {
  						  				highlight_label: '【..≼الـمـطـور فـقـط≽..】'',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الـمـطـور≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الـمـطـور≽..】',
  								    		  id: '.قائمتي'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: '【..≼كـل اقـسـام الـبـوت≽..】'',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼جـمـيـع الاقـسـام≽..】',
  										      title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
  									    	  description: '【..≼جـمـيـع الاقـسـام≽..】',
  								    		  id: '.المهام'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'quick_reply',
                                      id: `message`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '【..≼كـل الـلـي يـخـصـنـي≽..】',
                                      url: 'https://www.atom.bio/m_vro1',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'call',
                                      id: 'message'
                                  })
                              },
                              
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر|الاوامر|أوامر|الأوامر|menu)$/i;
export default handler;
