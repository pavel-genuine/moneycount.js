
function bestFriend(arr) {

    var largest = arr[0];

    for (element of arr) {

        if (element.length > largest.length) {


            largest = element;


        }
    }

    return largest;
}

var names = ['milton', 'mamun', 'zaaman', 'ashik', 'maruf'];

console.log(bestFriend(names));