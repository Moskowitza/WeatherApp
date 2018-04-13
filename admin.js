
const fs = require('fs');

    showHistory = function () {
        console.log("linked to main");
        fs.readFile('./user.txt', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
        });
    };

    module.exports = showHistory;