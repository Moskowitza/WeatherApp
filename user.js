var weather = require('weather-js');
var fs = require("fs");
var moment = require("moment");

console.log("user.js is linked");
// CONSTRUCTOR
var User = function (a, b) {
  this.name = a;
  this.location = b;
  this.date = moment().format("MM-DD-YYYY");
  this.getWeather = function () {
    weather.find({ search: this.location, degreeType: 'F' }, function (err, result) {
      if (err) console.log(err);
      console.log(JSON.stringify(result, null, 2));
    });
  };
  this.logUser = function () {
    fs.appendFile("users.txt", "User: " + this.name + ", Location: " + this.location + ", Date: " + this.date + " \r\n", function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("User information has been logged");
    });
  }
}

module.exports = User;

