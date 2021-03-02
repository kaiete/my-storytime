function saveAndClose() {
    const parametersForRedir = "favouritebook=" + localStorage.getItem("favourite")
    window.location.replace("https://storytime.k.vu/my/done/?" + parametersForRedir)
}
