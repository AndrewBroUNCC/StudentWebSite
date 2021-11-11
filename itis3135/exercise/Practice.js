"use strict";

var coffeeChoices = ["Espresso" , "Cappuccino"];
var prices = ["1.95", "3.45"];
var details = ["Delicious espresso, Wanna try it? ", "Delicious Cappuccino!"];
var orderTotal = 0;

window.onload = function() {

	var a = new Array;
	a = document.getElementsByTagName("img");
	console.log(a[0]);
	console.log(a[1]);
	console.log(a[2]);

	for (var i = 0; i<a.length; i++) {
		a[i].onclick = picClick;
		console.log(a[i]);
	}

	function picClick() {
		
		var link = this.alt;
		console.log(link);

		for (i = 0; i < coffeeChoices.length; i++) {
			if (link == coffeeChoices[i]) {
				var coffeeDetails = details[i];
				var coffeeType = coffeeChoices[i];
				var coffeePrice = prices[i];
				orderTotal += parseFloat(prices[i]);
				document.getElementById("order").innerHTML += "$" + coffeePrice  + " - " + coffeeType + " - " + coffeeDetails + "<br>";
				document.getElementById("total").innerHTML = "Total: $" + orderTotal.toFixed(2);
			}
		}
		
	}

	
};















/*
var items = ["Espresso", "Cappuccino"];
var costs = ["1.95", "3.45"];
var details = ["Delicious espresso, Wanna try it? ", "Delicious Cappuccino!"]
var orderTotal = 0;
var orderItems;

window.onload = function() {

	var a = new Array;

	a.push(document.getElementById("Espresso"));
	a.push(document.getElementById("Cappuccino"));

	for (var i = 0; i < a.length; i++) {

		a[i].onclick = clickPic;
		console.log(a[i]);
	}


	function clickPic() {
		
		var image = this.id;
		
		console.log(a[0]);
		console.log(a[1]);

		for(i=0; i<items.length; i++) {
			if (image == items[i]) {
				var itemCost = costs[i];
				var itemName = items[i];
				var itemDetails = details[i];
				document.getElementById("order").innerHTML += "$" + itemCost + " - " + itemName + " - " + itemDetails + "<br>";
				orderTotal += parseFloat(itemCost);
				document.getElementById("total").innerHTML = ("Total: $" + orderTotal.toFixed(2));
			}
		}
	}

}; // end onload
*/