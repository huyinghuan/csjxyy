(function(){
  var showTips = function(msg){
    chrome.runtime.sendMessage({msg: msg});
  };
  var s = false;
  
  var target  = "星沙";
  
  setTimeout(function(){
      school = $("#planDiv").text();
      //存在考场，但是不知道是不是目标考场
      if( school.indexOf("预约人数已满") == -1){
        //判断是否是目标考场
        if(school.indexOf(target) != -1){
          showTips("可以预约考试");
        }else{
          console.log("木有星沙考场")；
          location.reload();
        }
      }else{
        console.log("预约已满")；
        location.reload();
      }
      
  }, 15 * 1000);
})();
