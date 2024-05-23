"use strict";

let normalCount = 0;

function normalIncrement() {
    normalCount += 1;
    return normalCount;
}

console.log("normalIncrement: ", normalIncrement());
console.log("normalIncrement: ", normalIncrement());
console.log("normalIncrement: ", normalIncrement());
normalCount = 0;
console.log("normalCount Value: ", normalCount);


/**
 * In this above example, there is issue with 'normalCount' variable, 
 * because it is a global variable, anyone can update it.
 * To prevent updating 'normalCount' variable we can use Closure
 * 
 * In this below example, we can achilve Data Encaptulation.
 */

function closureIncrement() {
    let closureCount = 0;
    return function () {
        closureCount += 1;
        return closureCount;
    }
}

const closureIncrementCall = closureIncrement();
console.log("closureIncrementCall: ", closureIncrementCall());
console.log("closureIncrementCall: ", closureIncrementCall());
console.log("closureIncrementCall: ", closureIncrementCall());

// this will throw error - ReferenceError: closureCount is not defined
closureCount = 0;
console.log("closureCount: ", closureCount);
