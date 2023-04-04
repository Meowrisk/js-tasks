//#1 Фильтрация строки
const string = "Привет! Как дела?";

const vowels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];

function getVowels(stringToFilter) {
    let filteredVowels = '';

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toLowerCase();

        if (vowels.includes(currentLetter)) {
            filteredVowels += currentLetter;
        }
    }

    return filteredVowels;
}

console.log(getVowels(string));


//#2 Выборка объекта
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];

function getWorthyWorkers(workersArray) {
    const worthyWorkers = [];

    workersArray.forEach(currentWorker => {
        if (currentWorker.salary > 1000) {
            worthyWorkers.push(currentWorker.name)
        }
    })

    return worthyWorkers;
};

console.log(getWorthyWorkers(workers));


//#3 Анализ строки
const path = "/users/download/index.html";

function isHtml(pathArg) {
    const requiredExtension = '.html';
    const currentExtension = pathArg.slice(-5);

    return currentExtension === requiredExtension;
}

console.log(isHtml(path));


//#1 Фильтрация массива
const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
    return num % 2 === 0;
}

function filterArray(arrayToFilter, filteringFunction) {
    const filteredArray = [];

    arrayToFilter.forEach(num => {
        if (filteringFunction(num)) {
            filteredArray.push(num);
        }
    });

    return filteredArray;
}

console.log(filterArray(mixedArray, isEven));