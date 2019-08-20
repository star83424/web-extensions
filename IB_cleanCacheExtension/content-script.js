// test: https://www.mozilla.org/zh-TW/about/

chrome.runtime.onMessage.addListener((message) => {
  // document.body.style.border = `5px solid ${message.color}`;
  render();
})

function render() {
  var s = document.createElement('script');
  s.innerHTML = "alert = function(){}"
  document.body.appendChild(s);
  $("td:contains('AEM content cache for')").next().next().next().children("input").click();
}

/*
content script會跟現在正在逛的網頁的html綁在一起，要對頁面做什麼就要寫在這裡（background沒辦法）
但有些動作又要透過bg script  所以要傳message

*/