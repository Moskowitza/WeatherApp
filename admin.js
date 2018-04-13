console.log("admin.js is linked");
const fs = require('fs');

 var showHistory = function () {
        console.log("linked to main");
        fs.readFile('./users.txt', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
        });
    };

    module.exports = showHistory;