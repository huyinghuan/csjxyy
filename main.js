(function(){
  var showTips = function(msg){
    chrome.runtime.sendMessage({msg: msg});
  };
  var s = false;
  
  var target  = "长沙望城区驾考中心考场";
  
  setTimeout(function(){
    school = $("#planDiv").text();
    if("预约人数已满，稍等几分钟重试，等待别人放弃预约。"　!=  school){
      if(school.indexOf(target) != -1){
        showTips("可以预约考试");
        s = true;
      }
    }
  }, 3000);
  
  setTimeout(function(){
    if(!s){location.reload();}
  }, 7 * 1000);
  
})();
