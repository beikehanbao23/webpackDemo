var polyline = require('google-polyline');
var str = polyline.encode([
    [38.5, -120.2],
    [40.7, -120.95],
    [43.252, -126.453]
]);
console.log(str);
console.log(polyline.decode(str));

module.exports = function() {
    var polyline = require('google-polyline');
    var str = polyline.encode([
        [38.5, -120.2],
        [40.7, -120.95],
        [43.252, -126.453]
    ]);
    console.log(str);
    return str;
};