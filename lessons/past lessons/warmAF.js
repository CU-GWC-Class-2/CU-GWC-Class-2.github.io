function changeBackground() {
	var r = Math.floor(Math.random() * 226).toString();
	var g = Math.floor(Math.random() * 226).toString();
	var b = Math.floor(Math.random() * 226).toString();

	var color = "rgb(" + r + "," + g + "," + b + ")";

    document.body.style.backgroundColor = color;
}


function changeLink() {
	var randNum = Math.floor(Math.random() * 10000)

	var newLink = "https://twitter.com/" + randNum

	document.getElementById("wordLink").href = newLink;
}


function changeWord() {
	var words = ["boba", "friend", "penguin", "eraser", "coffee", "enemy", "Miguel"];

	var randIndex = Math.floor(Math.random() * words.length);
	var newWord = words[randIndex];

	document.getElementById("wordLink").innerHTML = newWord;
}


