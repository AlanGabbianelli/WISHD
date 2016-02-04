
var tenMinsSuggestions = document.getElementById("tenMins"),
    thirtyMinsSuggestions = document.getElementById("thirtyMins"),
    oneHourSuggestions = document.getElementById("oneHour"),
    congrats = document.getElementById("zero-time-wasted"),
    FbEndTime,
    FbStartTime,
    FbTime,
    FbMins,
    thisSiteMins = -1;


 window.onload = function(){
  setFbTime();
  FbTimer();
  keepTime();
 }



function setFbTime(){
  FbEndTime = new Date().getTime();
  FbStartTime = localStorage.getItem("FBtime");
  FbTime = FbEndTime - FbStartTime;
   FbMins = (Math.round(FbTime/1000/60));
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}

function showThirtyMins(){
  hide("tenMins");
  show("thirtyMins");
}

function showOneHour(){
  hide("thirtyMins");
  show("oneHour");
}

function keepTime() {
  thisSiteMins++;
  thisSiteMins = checkTime(thisSiteMins)
  document.getElementById("footer-timer").innerHTML = thisSiteMins;
  document.getElementById("wishd-time").innerHTML = thisSiteMins;
  setTimeout(keepTime, 1000);
};

function showCongrats(){
  hide("tenMins")
  hide("headings");
  show("zero-time-wasted");
}

function FbTimer(){
  if(FbMins===0) showCongrats();
  if(FbMins===2) showThirtyMins();
  if(FbMins===3) showOneHour();
  FbMins = checkTime(FbMins)
  document.getElementById("fb-timer").innerHTML = FbMins;
}


function hide(item) {
  document.getElementById(item).className += " hidden";
}

function show(item) {
  document.getElementById(item).classList.remove("hidden");
}