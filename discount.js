function dis(price, discount) {


    var result = price - price * discount / 100
    return parseFloat(result.toFixed(2))

}