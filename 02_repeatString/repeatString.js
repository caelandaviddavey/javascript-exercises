const repeatString = function(string, repeats) {
    let result = '';
    if (repeats < 0) {
        result = 'ERROR';
    } else {
        for (let i = 0; i < repeats; i++) {
            result += string;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;