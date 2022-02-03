function positiveNum(arr) {

    var newArr = []

    for (element of arr) {

        if (element >= 0) {

            newArr.push(element);

        }

        else {
            break;

        }

    }

    return newArr;
}

var inputArr = [1, -3, 5, 0, -1, 7, 8, 0,]

console.log(positiveNum(inputArr));