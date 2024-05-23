"use strict";

/** 
 * By using Debounce, we can call any function after some delay.
 */

function debounceFunction(debFunction, delay) {
    let debTimer;
    return function (params) {
        clearTimeout(debTimer);
        debTimer = setTimeout(() => {
            debFunction(params);
        }, delay);
    }
}

function searchDataAPI(searchData) {
    console.log("searchData: ", searchData);
}

const debounceFunctionCall = debounceFunction(searchDataAPI, 500);
document.getElementById("searchInput").addEventListener('keyup', function (event) {
    const searchTxt = event.target.value;
    debounceFunctionCall(searchTxt);
});