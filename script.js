


function isOldEnoughToVote(age) {
    if (age>= 18){
        return true;
    }else{
        return false;
    }
}

function getProperty(obj, key) {
    return obj.key;
}

function addProperty(obj, key) {
    obj[key] = true;
    return obj;
}

function removeProperty(obj, key) {
    delete obj[key];
}

function isEven(num) {
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function isOdd(num) {
    if(num % 2 != 0){
        return true;
    }else{
        return false
    }
}

function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}

function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function getAllWords(str) {
    var arr = str.split(" ");
    if(str.length == 0){
        return [];
    }else{
        return arr;
    }
}

function extend(obj1, obj2) {
    for(var key in obj2){
        if(obj1[key]){
            obj1[key];
        }else{
            obj1[key] = obj2[key]
        }
    }
    return obj1;
}

function removeStringValues(obj) {
    for(var key in obj){
        if(typeof obj[key] == "string"){
            delete obj[key];
        }
    }
}

function getIndexOf(char, str) {
    for(var i=0; i<=str.length; i++){
        if (str[i] == char){
            return i;
        }
    }
    return -1;
}

function keep(array, keeper) {
    var array2 = [];
    for(var i=0; i<=array.length; i++){
        if(array[i]== keeper){
            array2.push(array[i]);
        }
    }
    return array2;
}

function getLargestElementAtProperty(obj, key) {
    var x = 0;
    if ( obj[key] === undefined ) {
        return undefined;
    }
    if ( Array.isArray(obj[key]) === false) {
        return undefined;
    }if ( obj[key].length < 1 ) {
        return undefined;
    }

    for(var prop in obj[key]){
        if(obj[key][prop] >= x){
            x = obj[key][prop];
        }
    }
    return x;
}

function calculateBillTotal(preTaxAndTipAmount) {
    var tax = (preTaxAndTipAmount * 0.095);
    var tip = (preTaxAndTipAmount * 0.15);
    return (preTaxAndTipAmount + tax + tip);
}

function sumDigits(num) {
    var numString = num.toString();
    var starting = 0;
    var sum = 0;
    if (num < 0) {
        sum -= Number(numString[1]);
        starting += 2;
    }
    for (var i = starting; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    return sum;

}

function listAllValues(obj) {
    var x = [];
    for(var key in obj){
        x.push(obj[key]);
    }
    return x;
}

function detectOutlierValue(string){
    string = string.split(' ').map(Number)
    var even = string.filter(e => e % 2 === 0)
    var odd = string.filter(e => e % 2 !== 0)
    if(even.length > odd.length){
        return string.indexOf(odd[0])+1
    } else {
        return string.indexOf(even[0])+1
    }

}

function search(array, value) {
    var maxIndex = array.length - 1;
    var minIndex = 0
    var guess;

    for ( var i = 0; i < array.length; i++){
        guess = Math.floor((maxIndex + minIndex)/2);

        if(array[guess] === value){
            return guess;


        }else if(array[guess] > value){
            maxIndex = guess;

        }else if(array[guess] < value){
            minIndex = guess;
        }
    }
    return null;
}