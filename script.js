
let booleansArr = 0;
let numbersArr = 0;
let stringsArr = 0;
let nestedArr = 0;

function checkTypesInArr(userArr) {
    for (let i = 0; i < userArr.length; i++) {
        if (typeof userArr[i] === 'string') {
            stringsArr++;
        } else if (typeof userArr[i] === 'number') {
            numbersArr++;
        } else if (typeof userArr[i] === 'boolean') {
            booleansArr++;
        } else if (Array.isArray(userArr[i])) {
            nestedArr++;
            checkTypesInArr(userArr[i])
        }
    }
}

const sampleArray = [5, 'Ali', null, 'Gap', 0, ['a', 2], true, 'Web'];
checkTypesInArr(sampleArray);

console.log(`Booleans: ${booleansArr} Strings: ${stringsArr} Numbers: ${numbersArr} Arrays: ${nestedArr}`);
