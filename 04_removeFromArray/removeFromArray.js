const removeFromArray = function(array, ...theArgs) {


    
    for (let i = 0; i < theArgs.length; i++) {
        let numberToRemove = theArgs[i];
        let index = array.indexOf(numberToRemove);

        while (index !== -1) {
            array.splice(index, 1);
            index = array.indexOf(numberToRemove);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
