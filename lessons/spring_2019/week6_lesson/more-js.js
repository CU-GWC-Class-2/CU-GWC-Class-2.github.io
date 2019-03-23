function changeColor(name) {
	var r = Math.random()*256;
	var g = Math.random()*256;
	var b = Math.random()*256;
	//"hello" + "there" --> "hellothere"
	
	var color = "rgb("+r+","+g+","+b+")";
	
	document.getElementById(name).style.backgroundColor = color;
}
/* 
Grocery list: potatoes, oat milk, eggs, blackberries
*/

var groceryList = ["potatoes", "oat milk", "eggs", "blackberries"];
		//indices: 	0    ,     1     ,   2   ,      3	

var intList =[1,2,3,4,5,23787,135];
  //indices: 0,1,2,3,4,  5  , 6
/*	
var favoriteFood =groceryList[1];

console.log(favoriteFood);
*/

//Math.floor(SOMETHING) --> chops of decimal point (truncating decimal)

function randomItem() {
	var randIndex = Math.floor(Math.random()*4);//bounds of the index: 0 to 3 (inclusive)
	console.log(randIndex);
	document.getElementById("two").innerHTML = groceryList[randIndex];
	
	changeColor("two");
}



















