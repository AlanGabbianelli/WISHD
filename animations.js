var tenMinsSuggestions = document.getElementById("tenMins"),
    thirtyMinsSuggestions = document.getElementById("thirtyMins"),
    oneHourSuggestions = document.getElementById("oneHour"),
    originEndTime = new Date().getTime(),
    originStartTime = localStorage.getItem("FBtime"),
    thisPageStartTime = originEndTime - originStartTime,
    mins = Math.floor(thisPageStartTime/60)-1,
    thisSiteMins = -1;


function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
};


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
  if(thisSiteMins===1) showThirtyMins();
  if(thisSiteMins===2) showOneHour();
  thisSiteMins = checkTime(thisSiteMins);
  document.getElementById("mins").innerHTML = thisSiteMins
  setTimeout(keepTime, 6000)
}

function hide(item) {
  document.getElementById(item).className += " hidden";
}

function show(item) {
  document.getElementById(item).classList.remove("hidden");
}
