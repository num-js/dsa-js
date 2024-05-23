"use strict";

function memoizeSquare() {
    const cache = {};
    return function (num) {
        if (num in cache) {
            console.log("returning from cache");
            return cache[num];
        }
        console.warn("calculating square..");
        cache[num] = num * num;
        return cache[num];
    }
}

const memoizeSquareCall = memoizeSquare();

console.log("memoizeSquare: ", memoizeSquareCall(2));
console.log("memoizeSquare: ", memoizeSquareCall(3));
console.log("memoizeSquare: ", memoizeSquareCall(2));