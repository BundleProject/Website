$(document).ready(function() {
    let theme = localStorage.getItem("theme")

    if (theme === null) {
        theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
        localStorage.setItem("theme", theme)
    }

    setTheme(theme)

    $('#dark-mode-switch').click(toggleTheme);
})

function setTheme(theme) {
    let body = $(document.body)

    if (theme === "dark") {
        body.removeClass("theme--dark")
        body.removeClass("theme--light")

        body.addClass("theme--dark")
    } else if (theme === "light") {
        body.removeClass("theme--dark")
        body.removeClass("theme--light")

        body.addClass("theme--light")
    }
}

function toggleTheme() {
    let theme = localStorage.getItem("theme")

    if (theme === "dark") theme = "light"
    else if (theme === "light") theme = "dark"
    else theme = "dark"

    localStorage.setItem("theme", theme)

    setTheme(theme)
}