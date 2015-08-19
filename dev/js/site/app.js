// window.onload = setupDom;
//
// function setupDom(){
//   // changeAllTheSources();
//   var graphic = document.getElementsByClassName('man-driver')[0];
//   console.log(graphic);
//   var graphicDoc = graphic.contentDocument;
//
//   var scarf = graphicDoc.getElementById("scarf");
//   var car = graphicDoc.getElementById("car");
//   console.log(car);
//
//   TweenMax.from(scarf, 1, {tranformOrigin: '100% 100%', rotation: -45});
//   TweenMax.to(scarf, .5, {transformOrigin: '50% 50%', scale: 1.2, delay: .9});
//
//   TweenMax.from(car, 1, {x: 200});
// }

window.onload = setupDom;

function setupDom(){


 var graphic = document.getElementsByClassName('man-driver')[0];
 console.log(graphic)
 var graphicDoc = graphic.contentDocument;

 // get the object for greensock to target
 var wheel = graphicDoc.getElementById("steering-wheel_x2F_hand");
 console.log(wheel)

//scarf variables
var scarf = graphicDoc.getElementById("scarf");

 //car vairables
 var carGroup = graphicDoc.getElementById('car--group');
 var car = graphicDoc.getElementById('car');

 //            variable, time, {what to do}
 // arm animation
 TweenMax.from(wheel, .7, {transformOrigin: '100% 100%', rotation: 45});
 TweenMax.to(wheel, .5, {transformOrigin: '50% 50%', scale:1.2, delay:.9});

 // car animation
 TweenMax.from(car, 1, {x: 200});
 
 // scarf animation

}
function resizeDom() {
changeAllTheSources();
}