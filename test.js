var coordinatesFinder = require("./index.js");
if(process.argv.length>2){
    addSeparator();
    console.log("using proxy: "+process.argv[2]);
    addSeparator();
    coordinatesFinder.setOpts({
            //"proxy":''
            "proxy": process.argv[2]
    });
}
coordinatesFinder.findCoordinates("Rimini", logCity);
coordinatesFinder.findCoordinates("London, UK",  logCity);
coordinatesFinder.findCoordinates("gragragag", logCity);

function logCity(city){
   addSeparator("------------------coordinates for: " + city.city);
   console.log("latitude: "+city.latitude);
   console.log("longitude: "+city.longitude);
   addSeparator();
}

function addSeparator(val){
  if(!val)
    val="-";
  while (val.length<100)
    val+="-";
  console.log(val);
}
