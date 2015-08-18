function setupDom{
  changeAllTheSources();
  var graphic = Document.getElementsByClassName('man-driver')[0];
  var graphicDoc = graphic.contentDocument;
  
  var arm = graphicDoc.getElementById("steeting-wheel_x2f_hand");
  console.log(arm)
  
  TweenMax.from(arm, .7, {tranformOrigin: '100% 100%', rotation: -45});
  
}