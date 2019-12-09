function flightFunc( city ){
	console.log("city: " + city);

	var today = new Date();
	var date = today.getFullYear() + '-' + ('0' + (today.getMonth()+1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

	console.log(date);

	var myMap = new Map();
	myMap.set("College Station", "CLL-sky");
	myMap.set("Houston", "HOU-sky");
	myMap.set("New York", "JFK-sky");
	myMap.set("Miami", "MIA-sky");
	myMap.set("Chicago", "ORD-sky");
	myMap.set("Los Angeles", "LAX-sky");
	myMap.set("Phoenix", "PHX-sky");
	myMap.set("Philadelphia", "PHL-sky");
	myMap.set("Kansas City", "MCI-sky");
	myMap.set("San Francisco", "SFO-sky");
	myMap.set("Oklahoma City", "OKC-sky");
	myMap.set("Boston", "BOS-sky");
	myMap.set("Las Vegas", "LAS-sky");
	myMap.set("Columbus", "CMH-sky");
	myMap.set("Nashville", "BNA-sky");
	myMap.set("Milwaukee", "MKE-sky");
	myMap.set("Atlanta", "ATL-sky");
	myMap.set("Salt Lake City", "SLC-sky");
	myMap.set("New Orleans", "MSY-sky");
	myMap.set("Denver", "DIA-sky");

	var destination = myMap.get(city);
	console.log(destination);
	var origin = myMap.get(document.getElementById("currlocation").value);
	console.log('ORIGIN: ' + origin);

	var key;
	
	//var data = "children=0&infants=0&country=US&currency=USD&locale=en-US&originPlace=AUS-sky&destinationPlace=DFW-sky&outboundDate=2019-12-03&adults=1";
	var data = "children=0&infants=0&country=US&currency=USD&locale=en-US&originPlace=" + origin + "&destinationPlace=" + destination + "&outboundDate=" + date + "&adults=1";
	

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
		var location = this.getResponseHeader("location").split("/");
		// console.log(location);
		key = location[location.length - 1];
			// SECOND REQUEST

			var data = null;

			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.addEventListener("readystatechange", function () {
				if (this.readyState === this.DONE) {
					//console.log(this.responseText);
					console.log(this.response)
					var newt= JSON.parse(this.response);
					//console.log(newt.Itineraries[0].PricingOptions[0].Price);
					//console.log(newt.Itineraries[0].PricingOptions[0].DeeplinkUrl);
					console.log(newt);
					document.getElementById('flight').href = newt.Itineraries[0].PricingOptions[0].DeeplinkUrl;
				}
			});
			console.log("Key: " + key);
	
			xhr.open("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/" + key);
			xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
			xhr.setRequestHeader("x-rapidapi-key", "43c2032160mshad61bba5d4ad2b9p16e3b5jsnbe315495aad3");
			xhr.send(data);
	}
});

xhr.open("POST", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0");
xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "43c2032160mshad61bba5d4ad2b9p16e3b5jsnbe315495aad3");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

xhr.send(data);
}
//flightFunc();