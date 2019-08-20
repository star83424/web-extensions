chrome.contextMenus.create({
  "title": "一鍵清除 AEM Content Cache",
  "contexts": ["all"],
  "onclick": genericOnClick
});


function genericOnClick(info, tab) {
  chrome.tabs.sendMessage(tab.id, {
    clicked: true
  });
  
}
//background script 可以開所有的瀏覽器的api，但content沒辦法