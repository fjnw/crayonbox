var apiKey = "45a6a8adc58b49fab4784504182706";
var weatherUrl = 'https://api.apixu.com/v1/current.json';

var getWeather = function(lat, lon, date) {
		$.ajax({
		  url: weatherUrl,
		  method: "GET",
		  data: {
		    key: apiKey, 
	  		 // search parameter (city, zip, grid coordinates)
	  		 q: lat + "," + lon,
	  		 // number of days until event, limited to <=10 days in the future
	  		 days: moment(date).diff(moment(), 'days') 
		  	}
		}).done(function(response) {
				$('#event-weather').html('<img src="https:' + response.current.condition.icon + '"/>');
				$('#event-weather').css("visibility", "visible")
		})
		/*.fail(function(response){
			console.log(this.url);
		});*/
};