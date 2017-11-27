// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var elementsWithClassName = [];
  node = node || document.body;
  if (node.classList && node.classList.contains(className)) {
    elementsWithClassName.push(node);
  }
  for (var i = 0; i < node.childNodes.length; i++) {
    var childNode = (node.childNodes)[i];
    // console.log(childNode.classList);
    // if (childNode.classList.contains(className)) {
    //   elementsWithClassName.push(childNode);
    // }
    //     
    if () {
      getElementsByClassName(className, childNode);
    }   
  } 
  return elementsWithClassName;
};

