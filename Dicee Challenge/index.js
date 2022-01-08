let randomNumber1 = Math.floor(Math.random() * 6 + 1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomImage1 = document.querySelector(".img1");
let randomImage2 = document.querySelector(".img2");

let heading = document.querySelector("h1");


changeAttribute(randomNumber1);
randomImage1.setAttribute("src", changeAttribute(randomNumber1));


changeAttribute(randomNumber2);
randomImage2.setAttribute("src", changeAttribute(randomNumber2));

changeTheTitle();


function changeAttribute(randomNumber1) {
  return "images/dice" + randomNumber1 + ".png";
}

function changeTheTitle() {
  if (randomNumber1 > randomNumber2) {
      heading.innerHTML = "Player 1 wins!";
  } else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 wins!";
  } else if (randomNumber1 === randomNumber2) {
    heading.innerHTML = "Draw!";
  }

}
