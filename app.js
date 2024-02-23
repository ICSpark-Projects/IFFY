// HELPFUL LINKS:
// https://www.w3schools.com/js/js_if_else.asp
// https://www.w3schools.com/jsref/met_document_addeventlistener.asp
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
// https://www.w3schools.com/tags/tag_input.asp

// Get the element with the id of 'myBtn', which is the button
// addEventListener - Tells the computer to see if we click on the button
// if we do click the button, we go inside the function
document.getElementById("myBtn").addEventListener("click", function() {
  // this is inside the function!

  // Get the element with the id of userInput and store it's value into input
  var input = document.getElementById("userInput").value;

// if the input is equal to 3, we run this statement
  if (input == 3) {
    // Get the element with the id 'solution' and change its innerHTML to Triangle
    document.getElementById('solution').innerHTML = 'Triangle';
    // Get the element with the id 'solutionImg' and change the image src <-- STRECH GOAL!
    document.getElementById('solutionImg').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png';
// if input is equal to 4, we run this statement
  } else if (input == 4) {
    document.getElementById('solution').innerHTML = 'Quadrilateral';
    document.getElementById('solutionImg').src = 'https://www.ixl.com/~media/1/JXerGInQd9ZEsCNXpFzg6Mt5x68NsgyYoO-XwjOXlJcyratBRAxcGoHDX6F1rgZCSy2p8zDE88xrFiTAgRqiC1h2E4tQa6mc6nSLFzQPdhQ.svg';
// if input is equal to 5, we run this statement
  } else if (input == 5) {
    document.getElementById('solution').innerHTML = 'Pentagon';
    document.getElementById('solutionImg').src = 'https://m.media-amazon.com/images/I/21RK5SmVP0L.jpg';
// if input is equal to 6, we run this statement
  } else if (input == 6) {
    document.getElementById('solution').innerHTML = 'Hexagon';
    document.getElementById('solutionImg').src = 'https://image.flaticon.com/icons/png/512/32/32425.png';
// if input is equal to 7, we run this statement
  } else if (input == 7) {
    document.getElementById('solution').innerHTML = 'Heptagon';
    document.getElementById('solutionImg').src = 'https://www.kidsmathgamesonline.com/images/pictures/shapes/heptagon.jpg';
// if input is equal to 8, we run this statement
  } else if (input == 8) {
    document.getElementById('solution').innerHTML = 'Octagon';
    document.getElementById('solutionImg').src = 'http://static1.squarespace.com/static/56808a88a12f44019ca5f3f2/t/5aa7e97424a6942b40896b42/1520953727750/Screen+Shot+2018-03-01+at+7.55.36+AM.png?format=1500w';
// if input is equal to 9, we run this statement
  } else if (input == 9) {
    document.getElementById('solution').innerHTML = 'Nonagon';
    document.getElementById('solutionImg').src = 'https://www.kidsmathgamesonline.com/images/pictures/shapes/nonagon.jpg';
// if input is equal to 10, we run this statement
  } else if (input == 10) {
    document.getElementById('solution').innerHTML = 'Decagon';
    document.getElementById('solutionImg').src = 'https://image.shutterstock.com/image-vector/decagon-icon-vector-geometry-decagonal-260nw-1056328973.jpg';
// if input is not 3,4,5,6,7,8,9, or 10, we run this statement
  } else {
    document.getElementById('solution').innerHTML = 'Try Again';
    document.getElementById('solutionImg').src = '';
  }
});
