//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري 😩❤‍🔥*'  
     ]; 
    }else if (/^كسمك|كسمكك$/i.test(m.text)) { 
     responses = [ 
'*كسمين امك🦦*'
      ];
    }else if (/^بقولك اي|بقولك ايه|بقولك اية|بقولك ايهه$/i.test(m.text)) { 
     responses = [ 
'*خدتك عليه🦦*'
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^بخير|بخير الحمد لله $/i.test(m.text)) { 
     responses = [ 
'*دايما يارب 💎🩵*'
     ]; 
 }else if (/^كداب|شرير$/i.test(m.text)) { 
     responses = [ 
'*مظلوم اككيد😩❤‍🔥*'
     ]; 
   }else if (/^مرتبط$/i.test(m.text)) { 
     responses = [ 
'*هتشقطينى يبت 😂😁*'
   ];
  }else if (/^احا تاني$/i.test(m.text)) { 
     responses = [ 
'*احتين علي احتك تاني🦦*',   ]; 
   }else if (/^بوت بتحبني؟|بوت بتحبنى$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^بوت بتكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااه اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  

     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 🙂🫀*'
     ]; 
     }else if (/^🌚|😉|🥹$/i.test(m.text)) { 
     responses = [ 
       '😘',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       'اسمي مارو يسطا🦦',  

     ];
     }else if (/^❤|♥$/i.test(m.text)) { 
     responses = [ 
       '*اعشقق♥*',  

     ];
     }else if (/^مارو$/i.test(m.text)) { 
     responses = [ 
       '*قلب مارو🦦*',  

     ]; 
     }else if (/^احا|احاا|احااا|احاااا$/i.test(m.text)) { 
     responses = [ 
       'احتين علي احتك🦦',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^.menu$/i.test(m.text)) { 
     responses = [ 
       '*غلط اكتب .اوامر*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
