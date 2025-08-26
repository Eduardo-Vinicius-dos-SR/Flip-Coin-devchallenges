const heads = document.getElementById("heads");
const tail = document.getElementById("tail");
const btnRandom = document.getElementById("btn-random");
const coinTitle = document.getElementById("coin-title");

function resetAnimations(...elements) {
	elements.forEach((element) => {
		element.classList.remove("enter", "exit");
	});
}

function flipCoin(active, next, title) {
	resetAnimations(heads, tail);

	active.classList.add("exit");

	setTimeout(() => {
		active.classList.remove("active");

		setTimeout(() => {
			coinTitle.innerText = title;
			next.classList.add("active", "enter");
		}, 300);
	}, 200);
}

btnRandom.addEventListener("click", () => {
	const coinActive = document.querySelector(".coin.active");
	if (coinActive === heads) {
		flipCoin(heads, tail, "Tail");
	} else {
		flipCoin(tail, heads, "Heads");
	}
});
