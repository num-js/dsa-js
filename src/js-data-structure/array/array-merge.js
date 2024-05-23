const mergeArray = (arrData1, arrData2, mergedArr) => {
    for (let i = 0; i < arrData1.length; i++) {
        // mergedArr.push(arrData1[i]);
        mergedArr[i] = arrData1[i];
    }

    for (let i = 0; i < arrData2.length; i++) {
        // mergedArr.push(arrData2[i]);
        mergedArr[i + arrData1.length] = arrData2[i];
    }
}

const mergeSortedArray = (arrData1, arrData2, mergedArr) => {
    let arr1Index = 0, arr2Index = 0, mergedArrIndex = 0;

    while (arr1Index < arrData1.length && arr2Index < arrData2.length) {

        if (arrData1[arr1Index] < arrData2[arr2Index]) {
            mergedArr[mergedArrIndex] = arrData1[arr1Index];
            arr1Index++;
        } else {
            mergedArr[mergedArrIndex] = arrData2[arr2Index];
            arr2Index++;
        }
        mergedArrIndex++;
    }

    while (arr1Index < arrData1.length) {
        mergedArr[mergedArrIndex] = arrData1[arr1Index];
        arr1Index++;
        mergedArrIndex++;
    }

    while (arr2Index < arrData2.length) {
        mergedArr[mergedArrIndex] = arrData2[arr2Index];
        arr2Index++;
        mergedArrIndex++;
    }

    console.log("Array 1: ", arrData1)
    console.log("Array 2: ", arrData2)
    console.log("Merged Array: ", mergedArr)
}