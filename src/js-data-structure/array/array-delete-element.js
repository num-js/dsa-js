const deleteElementWithPosition = (arrData, deletePosition) => {
    for (let i = deletePosition; i < arrData.length - 1; i++) {
        arrData[i] = arrData[i + 1];
    }
    arrData.length = arrData.length - 1;
}