const renderArrayData = (arrData, dataContainerId = "dataContainer") => {
    let dataContainer = document.getElementById(dataContainerId);
    dataContainer.innerHTML = "";
    arrData.forEach(data => {
        let elementHtml = `<span class="single-element"> ${data} </span>`;
        dataContainer.innerHTML += elementHtml;
    });
}