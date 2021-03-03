function saveAndClose() {
    const parametersForRedir = "favouritebook=" + localStorage.getItem("favourite") + "&editbutton=" + localStorage.getItem("editbutton").toString()
    window.location.replace("https://storytime.k.vu/my/done/?" + parametersForRedir)
}
function deletePreferences() {
    localStorage.clear()
}
