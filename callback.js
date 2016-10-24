var maxTime = 1000;
var evenDoubler = function (v, callback) {

    var waitTime = Math.floor(Math.random() * (maxTime + 1));
    if (v % 2) {
        setTimeout(function () {
            callback(new Error("odd input"));
        }, waitTime);
    } else {
        setTimeout(function () {
            callback(null, v * 2, waitTime);

        }, waitTime);
    }

};

var handleResults = function (err, results, time) {
    if (err) {
        console.log("ERROR" + err.message);
    } else {
        console.log("the results are " + results + "(" + time + "ms)");
    }
}

evenDoubler(2, handleResults);
evenDoubler(3,handleResults);
console.log("-----");
