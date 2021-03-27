const scriptName = "Melon_Api";

const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init(''); //자스키
Kakao.login('',''); //아디•비번

const Jsoup = org.jsoup.Jsoup;

const allsee = "\u200d".repeat(500);

const n = "\n";
const nn = "\n".repeat(2);

const link = "https://m.search.daum.net/search?w=music&m=song&DA=STC&s=default&q=";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  if (msg.startsWith(".멜론 ")) {
    try{
      var overall = org.jsoup.Jsoup.connect(link + msg.substr(4))
      .get().select("#musicColl > div.compo-fulltext.ty_tit1.ty_desc1 > ul > li:nth-child(1)");
      var imgLink = overall.select("div.info_item > div > a > img").attr("data-original-src");
      var title = overall.select("div.info_item > a > strong").text();
      var artist = overall.select("div.info_item > a > p").text();
      var album = overall.select("div.info_item > a > span > span.txt_info.clamp > span").text();
      var albumDate = overall.select("div.info_item > a > span > span:nth-child(2)").text();
      var musicId = overall.select("div.compo-tab.ty_btn > div.boxbtn_comm > a:nth-child(2)").attr("data-song-id");
      var lyrics = overall.select("div.compo-tab.ty_btn > div.wrap-panel > div > div.info_desc").html().replace(/<[^>]*>/g,"");
      
      var path = "?kakaotalk://melon?action=playmusic&type=song&mediaid="+musicId+"&menuid=1000000932";
      //replier.reply("g-o.kro.kr/?kakaotalk://melon?action=playmusic&type=song&mediaid="+musicId+"&menuid=1000000932");
      
      Kakao.send(room, {
        "link_ver" : "4.0",
        "template_id" : 45886,
        "template_args" : {
          Img: imgLink,
          Title: title,
          Artist: artist,
          Album: album + "   " + albumDate,
          Song: msg.substr(4),
          Path: path
        }
      }, "custom");

  } catch(e) {
    replier.reply(e);
  }
  }


}
