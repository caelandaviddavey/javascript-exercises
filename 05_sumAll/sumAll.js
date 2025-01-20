const sumAll = function(firstNumber, secondNumber) {
    let lowNumber;
    let highNumber;

    if (
        firstNumber < 0 || !Number.isInteger(firstNumber) || secondNumber < 0 || !Number.isInteger(secondNumber)) {
        return 'ERROR';
    }


    if (firstNumber < secondNumber) {
        lowNumber = firstNumber;
        highNumber = secondNumber;
    } else {
        lowNumber = secondNumber;
        highNumber = firstNumber;
    }

    let result = 0;

    for (let i = lowNumber; i <= highNumber; i++) {
        result += i;
    }

return result;

};

// Do not edit below this line
module.exports = sumAll;
