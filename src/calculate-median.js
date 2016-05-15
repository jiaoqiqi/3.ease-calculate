function calculate_median(arr) {

    var evenNumber = buildEvenArray(arr);
    var midNumber = buildMidNumber(arr, evenNumber);

    return midNumber;

}

function buildEvenArray(arr) {
    var evenNumber = [];
    var j = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumber[j] = arr[i];
            j++;
        }
    }

    return evenNumber;
}

function searchEvenNumber(arr, even) {
    for(var i = 0; i<arr.length;i++){
        if(arr[i] === even){

            return i;
        }
    }
}

function buildMidNumber(arr, evenNumber) {
    var allNumbers = [];
    var n = 0;

    for (var i = 0; i < arr.length; i++) {
        var firstEven = searchEvenNumber(arr, evenNumber[0]);
        var finalEven = searchEvenNumber(arr, evenNumber[evenNumber.length - 1]);
        if (i >= firstEven && i <= finalEven) {
            allNumbers[n] = arr[i];
            n++;
        }
    }

    var mid = parseInt(allNumbers.length/2);

    return allNumbers[mid];

}


module.exports = calculate_median;