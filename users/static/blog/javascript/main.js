/* Code By N01zzz */

navbool = false;


var l1 = document.getElementsByClassName("l1");
  var l2 = document.getElementsByClassName("l2");
  var l3 = document.getElementsByClassName("l3");
  var sm = document.getElementById("submenu")


function move() {


  l1[0].style.width = "30px";
  l1[0].style.top = "10px";
  l1[0].style.transitionProperty = "all";
  l1[0].style.transitionDuration = "0.1s";
  l1[0].style.transform = "rotate(45deg)";

  l2[0].style.width = "30px";
  l2[0].style.top = "10px";
  l2[0].style.transitionProperty = "all";
  l2[0].style.transitionDuration = "0.1s";
  l2[0].style.transform = "rotate(315deg)";

  l3[0].style.opacity = "0";

  sm.style.opacity = 1;
 
  navbool = true;
}

function boom() {

  l1[0].style.width = "30px";
  l1[0].style.top = "1px";
  l1[0].style.transitionProperty = "all";
  l1[0].style.transitionDuration = "0.1s";
  l1[0].style.transform = "rotate(180deg)";


  l2[0].style.width = "30px";
  l2[0].style.top = "7px";
  l2[0].style.transitionProperty = "all";
  l2[0].style.transitionDuration = "0.1s";
  l2[0].style.transform = "rotate(180deg)";


  l3[0].style.opacity = "1";
  l3[0].style.top = "13px";

  sm.style.opacity = 0;

  navbool = false;
}



function toggleNav() {
  navbool ? boom() : move();
}

