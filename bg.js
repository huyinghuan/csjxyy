var showTips = function(msg){
  chrome.notifications.create("jxyy", {
    type: "basic",
    iconUrl: "assets/icon_128.png",
    title: "驾校预约",
    message: msg
  });
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    showTips(request.msg);
  }
);