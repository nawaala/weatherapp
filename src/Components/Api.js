
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '913ac17fc1msh81257d6c2dd0505p1b6623jsna52f7896bcf8',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

try {
	const response = await fetch(GEO_API_URL, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}