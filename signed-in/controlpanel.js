const parametersForRedir = "favouritebook=" + localStorage.getItem("favourite")
function saveAndClose() {
    window.location.replace("https://storytime.k.vu/my/done/?" + parametersForRedir)
}
