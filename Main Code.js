const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init(''); //자스키
Kakao.login('',''); //아디•비번
const Jsoup = org.jsoup.Jsoup;


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  if (msg.startsWith(".멜론 ")) {
    try{
      var a = "";
      a = JSON.parse(org.jsoup.Jsoup.connect("https://api.music.msub.kr/?song=" + msg.substr(4)).ignoreContentType(true).get().text()).song[0];
      //replier.reply(JSON.stringify(a, null, 4));
      //replier.reply(a["melonlink"].split("=")[1]);
      

Kakao.send(room, {"link_ver" : "4.0",
                  "template_id" : 45886,
                  "template_args" : {
                    Img: a["albumimg"],
                    Title: a["name"],
                    Artist: a["artist"],
                    a: a["melonlink"].split("=")[1],
                    Song: msg.substr(4)
                 }
                 }, "custom");
      
  } catch(e) {
    replier.reply(e);
  }
  }
}
