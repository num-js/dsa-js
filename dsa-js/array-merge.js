const mergeArray = (arrData1, arrData2, mergedArr) => {
    for (let i = 0; i < arrData1.length; i++) {
        mergedArr.push(arrData1[i]);
    }

    for (let i = 0; i < arrData2.length; i++) {
        mergedArr.push(arrData2[i]);
    }
}