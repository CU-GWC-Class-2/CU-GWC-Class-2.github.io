function randName() {
	//list of noises
	var noises = ["meow", "oink", "rawr", "blub", "cacaw", "woof", "nayy", "baaa"];
	var max = noises.length;

	//get a random number between 0 and the last index of the array (length of the array minus 1) 
    var randomIndex =  Math.floor(Math.random() * max);
    
    //display the name that corresponds to that index!
    document.getElementById("results").innerHTML = "RANDOM:" + noises[randomIndex];

}

