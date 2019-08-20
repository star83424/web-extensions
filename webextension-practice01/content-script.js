// test: https://www.mozilla.org/zh-TW/about/
// document.body.style.border = '5px solid red';
const mikasaImg = chrome.extension.getURL("mikasa_mva300.png");
var img = document.createElement("img");
img.setAttribute("src", mikasaImg);
document.body.appendChild(img)

chrome.runtime.onMessage.addListener((message) => {
  // document.body.style.border = `5px solid ${message.color}`;
  render();
  setInterval(render, 10000);
})

function render() {
  let x = document.getElementsByClassName("_55lr");

  for (let item of x) {
    // In ES5 or older :  string.indexOf(substring) !== -1
    // In ES6          :  string.includes(substring)=== true
    item.innerText = checkLocale(item.innerText);
  }

  let divList = document.getElementsByClassName("_1gyw _55lt");
  for (let div of divList) {
    if (div.firstChild.src !== mikasaImg) {
      div.firstChild.src = mikasaImg;
    }
  }
}

function checkLocale(text){
  let locale = {
    mapping : [
    {
    locale : "ENG",
    RegExp : /^[A-Z \-\'a-z]+$/,
    keyWord: " Let's go for volley!"
  }, 
   {
    locale : "JPN",
    RegExp : /[\u3040-\u30FF]/,
    keyWord : " ハイキュー！"
  }],
    default:{
      locale : "TWN",
      RegExp : "",
      keyWord : " 打球囉！"
    }
  };

  let matchLocale = locale.mapping.find((item)=>text.match(item.RegExp)) || locale.default;
  if (text.includes(matchLocale.keyWord)){
    return text;
  }
  return  text + matchLocale.keyWord;
}

/*
content script會跟現在正在逛的網頁的html綁在一起，要對頁面做什麼就要寫在這裡（background沒辦法）
但有些動作又要透過bg script  所以要傳message

*/