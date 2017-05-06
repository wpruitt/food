console.log("make_cards.js")

var dogFoods = document.getElementById("dogFoods");
var catFoods = document.getElementById("catFoods");
// var cardCounter = 0
var petFood = (function(orgPetFood){
	orgPetFood.petFoodCard = function(foodType){
		var brands = [];
		var types = [];
		var price = []
		console.log(Object.keys(foodType)[0])
		if (Object.keys(foodType)[0] === "dog_brands"){
			console.log(foodType)
			for (var i = 0; i < foodType.dog_brands.length; i++){
				brands[i] = foodType.dog_brands[i]
				console.log(brands[0].types)
				for (var x = 0; x < brands[i].types.length; x++){
					console.log(brands[i].types[x])
					// console.log(brands[i].types[x].volumes.lenth)
					for (var y = 0; y < brands[i].types[x].volumes.length; y++){
						console.log(brands[i].types[x].volumes[y].name)
						console.log(brands[i].types[x].volumes[y].price)
						dogFoods.innerHTML += `<li class="productCard">
													<h4>${brands[i].name}</h4
													<h5>${brands[i].types[x].type}</h5>
													<p>Name: ${brands[i].types[x].volumes[y].name}<br>Price: ${brands[i].types[x].volumes[y].price}<p>`
					}
				}
			}
		}
		else {
			console.log("JSON data not validS")
		}
	}
	return orgPetFood
}(petFood || {}));

petFood.loadDogFood(petFood.petFoodCard)
petFood.loadCatFood(petFood.petFoodCard)