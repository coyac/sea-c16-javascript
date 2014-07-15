// Write a function that takes in a string seperated by a seperator, and will return an array 
// of strings in between the seperators.

var sampleInput = 'asdf$lskd1234$asdo$$$';

stringDelimiter(sampleInput, '$');
// -> ['asdf', 'lskd1234', 'asdo']






var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});




function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}