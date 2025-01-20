const leapYears = function(year) {
    let divisible4 = year % 4 === 0;
    let divisible100 = year % 100 === 0;
    let divisible400 = year % 400 === 0;
    let result = false;

    if (divisible100 === true && divisible400 === true) {
        result = true;
    } else if (divisible100 === true && divisible4 === true) {
        result = false;
    } else if (divisible4 === true) {
        result = true;
    }

return result;
};

// Do not edit below this line
module.exports = leapYears;
