$(document).ready(function(){
  //-----
  $("#hamburgermenu").on("click",function(){
    $(".topbar").toggleClass("topclick transition");
    $(".middlebar").toggleClass("middleclick transition");
    $(".bottombar").toggleClass("bottomclick transition");

  });
  //-----
});
