function setupDom(){
  changeAllTheSources();
  var graphic = Document.getElementsByClassName('man-driver')[0];
  var graphicDoc = graphic.contentDocument;
  
  var arm = graphicDoc.getElementById("steeting-wheel_x2f_hand");
  var car = graphicDoc.getElementById("car");
  console.log(car);
  
  TweenMax.from(arm, 1, {tranformOrigin: '100% 100%', rotation: -45});
  TweenMax.to(arm, .5, {transformOrigin: '50% 50%', scale: 1.2, delay: .9});
  
  TweenMax.from(car, 1, {x: 200});
}

