/**
* Created by Besian Krasniqi on 09/20/14
* email: besian@bksofteng.com
* website: www.bksofteng.com
*/

function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;

    while (lowerBound <= upperBound) {
        var mid = Math.floor( (upperBound + lowerBound) / 2 );
        if ( arr[mid] < data ) {
            lowerBound = mid + 1;
        }
        else if ( arr[mid] > data ) {
            upperBound = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

//nums.sort(function(a, b){return a-b});

var arrayOne = [-1, 10, 5, 6, 3, 20, 4, 35, 26, 100, 110];

arrayOne.sort(function(a, b){return a-b});
console.log("Unsorted array: " + arrayOne);
console.log("Sorted array: " + arrayOne);
console.log  ("Number 26 is located on index: [" + binSearch(arrayOne, 26) + "] of arrayOne array");

