"use strict";

/** 
 * By using Debounce, we can call any function after some delay.
 */

function debounceFunction(debFunction, delay) {
    let debTimer;
    return function (...args) {
        const ctx = this;
        clearTimeout(debTimer);
        debTimer = setTimeout(() => {
            // apply method can be used here
            // debFunction.apply(ctx, args);

            debFunction(...args);
        }, delay);
    }
}

function searchDataAPI(searchData) {
    console.log("searchData: ", searchData);
}

const debounceFunctionCall = debounceFunction(searchDataAPI, 500);
document.getElementById("searchInput").addEventListener('keyup', function (event) {
    const searchTxt = event.target.value;
    debounceFunctionCall(searchTxt, "abc");
});