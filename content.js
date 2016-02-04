var block = document.getElementsByTagName('div');
var i = 1;


var img = new Image();
img.src = 'https://scontent-mrs1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/208178_17291872696_7674_n.jpg?oh=f1ac463e3cfc1d77495964c14923890f&oe=573F11E9';

function richify() {
  setTimeout(function() {
    block[i].appendChild(img);
  }, 12000);
}
  richify();

function changeBackground() {
   setTimeout(function () {
    if (i % 2 === 0) {
      block[i].style.backgroundColor = "red";
      document.getElementsByTagName('body')[0].style.backgroundColor = "red";
    } else {
      block[i].style.backgroundColor = "purple";
    }
    i+= 1;
    if (i < 1000) {
      wrapper(20000);
      changeBackground();
      myLoop();
    }
  }, 10000);
}



changeBackground();




















function wrapper(iteration){
  setTimeout(function() {
    alert('you should really think about doing something else');

    if(iteration === 1000) {wrapper(1000);}
    else{wrapper(iteration-200);}
  }, iteration);
}



function myLoop () {
   setTimeout(function () {
     var node = document.createElement("H1");
     var textnode = document.createTextNode("Go do something worth a damn!!");
     node.appendChild(textnode);
     block[i].appendChild(node);
      i+= 5;

      if (i < 1000) {
         myLoop();
      }
   }, 3000);
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
