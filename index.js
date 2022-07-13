var randomvariable = Math.floor(Math.random() * 6) + 1;
var randompic1 = "img" + "/" + "Alea_" + randomvariable + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randompic1);

var randomvariable2= Math.floor(Math.random() * 6) + 1;
var randompic2 = "img" + "/" + "Alea_" + randomvariable2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randompic2);
if(randomvariable>randomvariable2)
{
   document.querySelector("h1").innerHTML="Player1 won";
}
else if(randomvariable<randomvariable2)
{
     document.querySelector("h1").innerHTML="Player2 won";
}
else
{
  document.querySelector("h1").innerHTML="Draw";
}
