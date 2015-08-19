
window.onload = setupDom;

// // Fires when viewport resized
// window.onresize = resizeDom;
//
// // Fires when scroll
// window.onscroll = doOnScroll;
//
//
// function setupDom() {
//    // Get all elements that need animation
//    var elements = document.querySelectorAll('.location'),
//    // This is a holder for each element object.
//        element = {};
//
//    // Loop through NodeList elements and add each element to an object, figure out how far from top of document
//    // and add to elements array
//    for(var i = 0, len = elements.length; i < len; i++) {
//        element = {
//            element: elements[i],
//            top: getDistanceFromTop(elements[i])
//        }
//        animations.elements.push(element);
//    }
//
//    // Run doOnScroll once in case some elements are in viewport onload
//    setTimeout(function() { doOnScroll(); }, 1000);
// }
//
// function resizeDom() {
//    // Refigure offsets when window is resized
//    animations.elements.forEach(function(element, index, array) {
//        element.top = getDistanceFromTop(element.element);
//    });
// }
//
// // **********************************************
// // Move progress bars based on scroll
// // **********************************************
// function doOnScroll() {
//    animations.testScroll();
// }
//
// var animations = {
//    iconOffset: 0,
//    elements: [],
//    testScroll: function () {
//        // Determine how far the user has scrolled
//        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//
//        // Add window height to it, and minus how far from bottom of viewport an element must be
//        // before the animation begins
//        scrollTop = scrollTop + window.innerHeight - 200;
//
//        // Loop through array of elements and test each one to see if it's within viewport
//        // If so, animate
//        this.elements.forEach(function(element, index, array) {
//            if(element.top < scrollTop) {
//                var graphic = element.element.getElementsByClassName('graphic')[0];
//                var contentDoc = graphic.contentDocument;
//
//                if(graphic.hasClass('gilberts--grill__graphic')) {
//                }
//
//                 // Remove animated element from array, so not tested after it's been animated once
//                array.splice(index, 1);
//            }
//        });
//    }
// };
//
// //Loops through all parent nodes of an element to get it's distance from the top of the document
// function getDistanceFromTop(element) {
//    var yPos = 0;
//
//    while(element) {
//        yPos += (element.offsetTop);
//        element = element.offsetParent;
//    }
//
//    return yPos;
// }
//
// Element.prototype.hasClass = function(className) {
//    var rx = new RegExp('(\\s|^)' + className + '(\\s|$)');
//
//    if(this.className.match(rx)) {
//        return true;
//    }
//
//    return false;
// }


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