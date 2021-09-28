const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const notesCalculated = document.querySelectorAll(".notes-calculated");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const nxtBtn = document.querySelector(".next");
const cash = document.querySelector(".cash");
// console.log("hello");

hideMsg();
checkBtn.addEventListener("click", function () {
	hideMsg();
	calculateNotesGiven(0);
	if (Number(billAmount.value) > 0) {
		if (Number(cashGiven.value) >= Number(billAmount.value)) {
			let amountGivenBack = cashGiven.value - billAmount.value;
			calculateNotesGiven(amountGivenBack);
		} else {
			writeMessage("do you wanna wash plates ?");
		}
	} else {
		writeMessage("Bill amount value is less than or equal to 0");
	}
});

nxtBtn.addEventListener("click", function () {
	if (Number(billAmount.value) > 0) {
		nxtBtn.style.display = "none";
		cash.style.display = "block";
		checkBtn.style.display = "block";
	} else writeMessage("Bill amount value is less than or equal to 0");
});

function hideMsg() {
	console.log("hello");
	message.style.display = "none";
}

function writeMessage(msg) {
	message.style.display = "block";
	message.innerHTML = msg;
	message.style.backgroundColor = "red";
}

function calculateNotesGiven(amountGivenBack) {
	const notes = [2000, 500, 100, 20, 10, 5, 1];
	for (let i = 0; i < 7; i++) {
		console.log(amountGivenBack / notes[i]);
		notesCalculated[i].innerHTML = Math.trunc(amountGivenBack / notes[i]);
		amountGivenBack %= notes[i];
		console.log(amountGivenBack);
	}
}
