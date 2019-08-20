
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, {
    clicked: true
  });
});

//background script 可以開所有的瀏覽器的api，但content沒辦法