var tenMins = document.getElementById("tenMins"),
    thirtyMins = document.getElementById("thirtyMins"),
    oneHour = document.getElementById("oneHour"),
    originEndTime = new Date().getTime(),
    originStartTime = new Date().getTime() - 1000,
    thisPageStartTime = originEndTime - originStartTime,
    mins = Math.floor(thisPageStartTime/60)-1,
    thisSiteMins = -1;


function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}



function addTime() {
  thisSiteMins++;
  thisSiteMins = checkTime(thisSiteMins);
  document.getElementById("mins").innerHTML = thisSiteMins;
  setTimeout(addTime, 60000);
}





function hide(element) {
  element.className += "hidden";
}


function show(element) {
  element.classList.remove("hidden");
}
