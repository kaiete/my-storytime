function saveAndClose() {
    const parametersForRedir = "favouritebook=" + localStorage.getItem("favourite")
    window.location.replace("https://storytime.k.vu/my/done/?" + parametersForRedir)
}
function mansetup() {
    var yousure = confirm("Are you sure? Only continue if you know exactly what you are doing, it can render My StoryTime unusable for you!!")
    if (yousure) {
        localStorage.setItem("favourite",prompt("Favourite book code:\nNOT book name, ie bb1, tmcj, thewatershrew"))
        alert("Done, to use normal setup instead continue to set using buttons (deletes this setup)")
    } else {
        alert("Cancelled, continue to use buttons.")
    }
}
function codesetup() {
    let codeforsetup = prompt("Enter code:\nNone for delete\nIf you don't understand, leave this blank, then use the buttons")
    localStorage.setItem("favourite",codeforsetup)
}
