const btnadd = document.querySelector("#add");
const btnsub = document.querySelector("#substract");
const resetButton = document.querySelector("#reset");
const playtillScore = document.querySelector("#playtill");
var i = 0;
var j = 0;
var winningScore = 3;
let isGameOver = false;
btnadd.addEventListener("click", () => {
	const head = document.querySelector("#player1Score");
	if (!isGameOver) {
		if (i != winningScore) {
			i++;
			head.innerText = i;
		} else {
			checkWinner();
		}
	}
});

btnsub.addEventListener("click", () => {
	const head = document.querySelector("#player2Score");
	if (!isGameOver) {
		if (j != winningScore) {
			j++;
			head.innerText = j;
		} else {
			checkWinner();
		}
	}
});

playtillScore.addEventListener("change", function (e) {
	winningScore = e.target.value;
	reset();
});

resetButton.addEventListener("click", reset);

function reset() {
	(i = 0), (j = 0);
	isGameOver = false;
	const player1score = document.querySelector("#player1Score");
	const player2score = document.querySelector("#player2Score");
	player1score.innerText = i;
	player2score.innerText = j;
	player1score.classList.remove("winner", "loser");
	player2score.classList.remove("loser", "winner");
}

function checkWinner() {
	if (i == winningScore) {
		alert("Winner is Player 1");
		const player1score = document.querySelector("#player1Score");
		const player2score = document.querySelector("#player2Score");
		player1score.classList.add("winner");
		player2score.classList.add("loser");
		isGameOver = true;
	}

	if (j == winningScore) {
		alert("Winner is Player 2");
		const player1score = document.querySelector("#player1Score");
		const player2score = document.querySelector("#player2Score");
		player2score.classList.add("winner");
		player1score.classList.add("loser");
		isGameOver = true;
	}
}
