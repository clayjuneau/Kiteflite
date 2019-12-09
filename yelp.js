function yelp(city){
	'use strict';

	const yelp = require('yelp-fusion');

	// Place holder for Yelp Fusion's API Key. Grab them
	// from https://www.yelp.com/developers/v3/manage_app
	const apiKey = 'iTIa91oPso67KJa42OcXqbaOCsOnAONH-Zq0UNajkdDKGEDCPgnLILInJFbINMeR-Po9_lfximaTB2EkER9W3kLNNmIpkKb4luHJGfmleMMQ46XifwW0PEOcj1LLXXYx';

	const searchRequest = {
	  term:'park',
	  location: city,
	  rating: 4
	};

	const client = yelp.client(apiKey);

	client.search(searchRequest).then(response => {
	  const firstResult = response.jsonBody.businesses[0];
	  const prettyJson = JSON.stringify(firstResult, null, 4);
	  console.log(prettyJson);
	}).catch(e => {
	  console.log(e);
	});
}
