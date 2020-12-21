/*Code partially taken from W3schools.com tutorial. URL: https://www.w3schools.com/howto/howto_js_slideshow.asp*/

var slideIndex = 1;

setInterval(plusDivs, 7000, slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "inline-block";
}
