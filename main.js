var User = require("./user.js");
var showHistory = require("./admin.js");
//require("./admin.js");
var moment = require("moment");


if (process.argv[2] === "admin") {
    showHistory()
}
else {
    var person = new User(process.argv[2], process.argv[3]);
    person.getWeather();
    person.logUser();
    console.log(person.date);
}
