

function redundant(str) {



    return function fname() {


        return str
    }
}

console.log(redundant('apple'));