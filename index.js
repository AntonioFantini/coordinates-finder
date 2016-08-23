var opts;
module.exports= {
	setOpts : function(opts){
		this.opts = opts;
	},
	findCoordinates : function(city, callback){
		var HttpsProxyAgent = require('https-proxy-agent');
	    var request = require('request');
			var agent;
			if(this.opts && this.opts.proxy){
	    	agent = new HttpsProxyAgent(this.opts.proxy);
			}
	   request({
	          uri: "https://maps.googleapis.com/maps/api/geocode/json?address="+city,
	          method: "GET",
	          headers: {
	          'content-type': 'application/x-www-form-urlencoded'
	          },
	          agent: agent,
	          timeout: 10000,
	          followRedirect: true,
	          maxRedirects: 10,
	          }, function(error, response) {
	          if(error){
	            console.log("Error " + error);
							return;	
						}
	          var resp = JSON.parse(response.body);
	          //console.log("Original resp: "+JSON.stringify(resp));
						 var cityObj ={};
						if(resp && resp.results.length >0){
								cityObj = {
									"city": resp.results[0].address_components[0].long_name,
									"latitude":resp.results[0].geometry.location.lat,
									"longitude":resp.results[0].geometry.location.lng
	       			   }
	         
						}else{
							cityObj = {
							  "city": "Invalid City",
								"latitude":"N.A.",
								"longitude":"N.A."
							 }
						 }
						callback(cityObj);
						
	      });
	}
}