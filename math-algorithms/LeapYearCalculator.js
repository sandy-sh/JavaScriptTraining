let year = 2024;

function isLeapYear(year) {
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    return `${year} is ${isLeap ? '' : 'not '}a leap year.`;
}

let result = isLeapYear(year);
console.log(result);