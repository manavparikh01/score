var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var input = document.querySelector("input");
var p1score = 0;
var p2score = 0;
var resetscore = 0;
var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");
var number = document.querySelector(".number");
var winningNumber = 5
var gameOver = false;

p1.addEventListener("click", function() {
    if (!gameOver) {
        p1score++;
        if (p1score === winningNumber) {
            player1.classList.add("winner");
            gameOver = true;
        }
        player1.innerHTML = p1score;
    }
});

p2.addEventListener("click", function() {
    if (!gameOver) {
        p2score++;
        if (p2score === winningNumber) {
            player2.classList.add("winner");
            gameOver = true;
        }
        player2.innerHTML = p2score;
    }
});

reset.addEventListener("click", function() {
    resetUs();
})

function resetUs() {
    player1.innerHTML = resetscore;
    player2.innerHTML = resetscore;
    p1score = 0;
    p2score = 0;
    gameOver = false;
    player1.classList.remove("winner");
    player2.classList.remove("winner");
}

input.addEventListener("change", function() {
    number.innerHTML = input.value;
    winningNumber = Number(input.value);
    resetUs();
})

