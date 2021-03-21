function saveAndClose() {
    const parametersForRedir = "favouritebook=" + localStorage.getItem("favourite") + "&editbutton=" + localStorage.getItem("editbutton").toString()
    window.location.replace("https://storytime.k.vu/my/done/?" + parametersForRedir)
}
function deletePreferences() {
    localStorage.clear()
}
const gpcValue = navigator.globalPrivacyControl
if (gpcValue) {
  document.getElementById("gpc").hidden = false
}
function didntDeleteSettings() {
  document.getElementById("didntdelete").hidden = false
}
