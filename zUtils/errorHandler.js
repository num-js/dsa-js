const errorHandler = (errorMessage = "") => {
    let errorHTML = `<div id="errorDiv"> ${errorMessage} </div>`;
    document.getElementById("alertMessage").innerHTML = errorHTML;

    setTimeout(() => {
        document.getElementById("alertMessage").innerHTML = "";
    }, 5000);
}