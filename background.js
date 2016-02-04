chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  if (response === 'Twitter') {
    saveTW();
  }

  if (response === 'Facebook') {
    saveFB();
  }

});

function saveFB(){
  var facebook = new Date()/1000;
  localStorage.setItem('FBtime', facebook);
}

function saveTW(){
  var twitter = new Date()/1000;
  localStorage.setItem('TWtime', twitter);
}

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({"url": "index.html"});
});
