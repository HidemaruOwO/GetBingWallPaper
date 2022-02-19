const request = require("request");

request({
  url: 'https://www.bing.com/',
  method: 'GET'
}, (error, response, body) => {
  img_contStart = body.indexOf(`class="img_cont" style="background-image: url(`);
  img_elBack = body.substring(img_contStart, img_contStart + 500);
  img_contEnd = img_elBack.indexOf(`); opacity: ;">`);
  img_url = "https://www.bing.com" + img_elBack.substring(0, img_contEnd).replace(`class="img_cont" style="background-image: url(`, "");
  console.log(img_url);
});