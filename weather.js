 getWeather=function(){
    
var weather = require('weather-js');

weather.find({search: location, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
  console.log(JSON.stringify(result, null, 2));
});
 }

module.exports=getWeather();