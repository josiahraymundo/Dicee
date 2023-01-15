// If page is reloaded, update h1
if (window.performance.navigation.type === 1) {
  var player1Die = generateRandomDie();
  var player2Die = generateRandomDie();
  // HTML elements
  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");
  var h1 = document.querySelector("h1");

  // Change Die images;
  var img1FileName = "images/dice" + player1Die + ".png";
  var img2FileName = "images/dice" + player2Die + ".png";
  img1.setAttribute("src", img1FileName);
  img2.setAttribute("src", img2FileName);

  // Update h1
  // Higher number wins
  if (player1Die > player2Die) {
    // player 1 wins
    h1.innerHTML = "🚩Player 1 Wins!";
  } else if (player1Die < player2Die) {
    //player 2 wins
    h1.innerHTML = "Player 2 Wins! 🚩";
  } else {
    // Draw!
    h1.innerHTML = "Draw!";
  }
}

//Functions
function generateRandomDie() {
  var randomDie = Math.floor(Math.random() * 6 + 1);
  return randomDie;
}
