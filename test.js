var coordinatesFinder = require("./coordinates_finder.js");
if(process.argv.length>2){
    addSeparator();
    console.log("using proxy: "+process.argv[2]);
    addSeparator();
    coordinatesFinder.setOpts({
            //"proxy":''
            "proxy": process.argv[2]
    });
}
coordinatesFinder.findCoordinates("Rimini", logLocation);
coordinatesFinder.findCoordinates("London, UK",  logLocation);
coordinatesFinder.findCoordinates("gragragag", logLocation);

function logLocation(location){
   addSeparator("------------------coordinates for: " + location.location);
   console.log("formatted address: "+location.formattedAddress);
   console.log("placeid: "+location.placeId);
   console.log("latitude: "+location.latitude);
   console.log("longitude: "+location.longitude);
   addSeparator();
}

function addSeparator(val){
  if(!val)
    val="-";
  while (val.length<100)
    val+="-";
  console.log(val);
}
