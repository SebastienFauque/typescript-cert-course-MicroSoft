"use strict";
/* Module 4: Develop typed functions using TypeScript
   Lab Start  */
/*  TODO: Convert the sortDescending and sortAscending functions to arrow
    functions. */
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in descending order */
let sortDescending = (a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
/*  sortDescending is a comparison function that tells the sort method how to sort
    numbers in ascending order. */
let sortAscending = (a, b) => {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
let buildArray = (items, sortOrder) => {
    let randomNumbers = [];
    let nextNumber;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    }
    else {
        return randomNumbers.sort(sortDescending);
    }
};
let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
let loanCalculator = (principle, interestRate, months) => {
    let interest = interestRate / 1200; // Calculates the monthly interest rate
    let payment;
    payment = principle * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return payment.toFixed(2);
};
console.log(loanCalculator(1000, 0.5, 12));
