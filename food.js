console.log("food.js")
var dogFood = [];
var petFood = (function(orgpetFood){
	var dogFood = [];
	var catFood = [];
	orgpetFood.loadDogFood = function(callbackFunction){
		loadDF = new XMLHttpRequest();
		loadDF.addEventListener("load", function(){
			dogFood = JSON.parse(this.responseText);
			console.log("dogFood", dogFood.dog_brands[0].types[0].volumes[0].price)
			callbackFunction(dogFood)
			console.log(dogFood.dog_brands[0].types[1].volumes[1].price)
		});
		loadDF.open("GET", "petfood.json");
		loadDF.send();
	}
	orgpetFood.loadCatFood = function(callbackFunction){
		loadCF = new XMLHttpRequest();
		loadCF.addEventListener("load",function(){
			catFood = JSON.parse(this.responseText);
			callbackFunction(catFood)
		});
		loadCF.open("GET", "catfood.json");
		loadCF.send();
	}
	return orgpetFood
}(petFood || {}));

