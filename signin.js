function authuser() {
    var storytime_signin_ok = confirm("Is it OK if you are redirected to StoryTime, to sign in?")
    if (storytime_signin_ok == true) {
        alert("StoryTime will guide you through the sign in process.")
        window.location.href = "https://storytime.k.vu/my/auth"
    } else {
        alert("My StoryTime does not have its own sign in.\nTherefore, you need to use StoryTime to sign in.\nReload the page to use StoryTime, to sign in.")
    }
}
