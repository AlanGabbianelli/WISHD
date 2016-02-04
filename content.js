chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);

var block = document.getElementsByTagName('div');
var i = 1;
var colors = ['red', 'green', 'yellow', 'blue', 'purple', 'black', 'white', 'orange'];

var img1 = new Image();
img1.src = 'https://scontent-mrs1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/208178_17291872696_7674_n.jpg?oh=f1ac463e3cfc1d77495964c14923890f&oe=573F11E9';

var img2 = new Image();
img2.src = 'https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/290159_10150307751762697_7047251_o.jpg';

function richify() {
  setTimeout(function() {
    var y = 1;
    block[y].appendChild(img2);
    y+=1;
    richify();
  }, 100);
}

function richifyTrigger() {
  setTimeout(function (){
    richify();
  }, 60000);
}

function lightTrigger() {
  setTimeout(function (){
    lights();
  }, 50000);
}

function captionTrigger() {
  setTimeout(function (){
    captions();
  }, 25000);
}

function blowItUpTrigger() {
  setTimeout(function (){
    blowItUp();
    addPics();
  }, 75000);
}

function blowItUp() {
  var body = document.getElementsByTagName('body')[0];
  body.remove();
}

function addPics() {
  var body = document.createElement("body");
  document.documentElement.appendChild(body);
  var textnode = document.createTextNode("This isn't what you actually want to be doing");
  var bigtext = document.createElement("H1");
  bigtext.appendChild(textnode);
  body.appendChild(bigtext);
  body.appendChild(img1);
}



function lights() {
  setTimeout(function(){
    block[i].style.backgroundColor = colors[Math.floor(Math.random()*go.length)];
    document.getElementsByTagName('body')[0].style.backgroundColor = colors[Math.floor(Math.random()*go.length)];
    i+= 1;
    lights();
  }, 300);
}

var c = 0;
function captions() {
   setTimeout(function () {
     var node = document.createElement("H1");
     var textnode = document.createTextNode(go[Math.floor(Math.random()*go.length)]);
     node.appendChild(textnode);
     block[c].appendChild(node);
     c+= 5;
     captions();
   }, 300);
}

richifyTrigger();
wrapper(15000);
captionTrigger();
lightTrigger();
blowItUpTrigger();

var go = ['take a good look at yourself in the mirror', 'you know this isnt actually fun', 'go on a date', 'ride a bike', 'get a life', 'learn spanish', 'grow up', 'do something worth a damn', 'walk your dog', 'get a dog', 'move to japan', 'go to the gym', 'make some real friends', 'call your parents', 'make a painting', 'stop wasting your time', 'learn how to code', 'get off your ass', 'find yourself', 'go get a snow cone with your kid', 'meditate', 'read a book', 'go for a jog'];

function wrapper(iteration){
  setTimeout(function() {
    alert("Are you sure you don't have anything better to do?");
    if(iteration <= 1000) {return;}
    else{wrapper(iteration-3000);}
  }, iteration);
}





// (function goDoSomething(iteration){
//   setTimeout(function() {
//
//
//
//     for(i=0; i<block.length; i++) {
//       var node = document.createElement("H1");                 // Create a <li> node
//       var textnode = document.createTextNode("Go do something worth a damn!!");         // Create a text node
//       node.appendChild(textnode);
//       block[i].appendChild(node);
//
//     }
//
//   }, 5000);
// })();







// newTime = new Date()/1000;
// alert("You've been on this site for " + (newTime - time) + " seconds... Just thought you might wanna know");

//
// $( "#clickme" ).click(function() {
//   $( "#book" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//   });
// });
