p1 = {
	score: 0,
	button: document.querySelector("#player1"),
	display: document.querySelector("#player1Score"),
};

p2 = {
	score: 0,
	button: document.querySelector("#player2"),
	display: document.querySelector("#player2Score"),
};

const resetButton = document.querySelector("#reset");
const playtillScore = document.querySelector("#playtill");

var winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
	if (!isGameOver) {
		if (player.score != winningScore) {
			player.score++;
			player.display.innerText = player.score;
		} else {
			checkWinner(player, opponent);
		}
	}
}

p1.button.addEventListener("click", () => {
	updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
	updateScore(p2, p1);
});

playtillScore.addEventListener("change", function (e) {
	winningScore = e.target.value;
	reset();
});

resetButton.addEventListener("click", reset);

function reset() {
	(p1.score = 0), (p2.score = 0);
	isGameOver = false;

	p1.display.innerText = p1.score;
	p2.display.innerText = p2.score;
	p1.display.classList.remove("winner", "loser");
	p2.display.classList.remove("loser", "winner");
}

function checkWinner(player, opponent) {
	if (player.score == winningScore) {
		alert("Winner is Player 1");

		player.display.classList.add("winner");
		opponent.display.classList.add("loser");
		isGameOver = true;
	}
}
