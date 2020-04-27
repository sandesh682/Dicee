var randomNum1 = Math.floor(Math.random()*6) + 1;
var img_src = "images/dice"+randomNum1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",img_src);


var randomNum2 = Math.floor(Math.random()*6) + 1;
var img_src = "images/dice"+randomNum2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",img_src);

var heading = document.querySelectorAll("h1")[0];

if(randomNum1>randomNum2){
  heading.innerHTML = "🚩Player1 Wins!";
}
else if(randomNum1<randomNum2){
  heading.innerHTML = "Player2 Wins!🚩";
}
else{
  heading.innerHTML = "Draw!";
}
