import "./styles.css"
import { Home } from "./Home.js"
import { Menu } from "./Menu.js"
import { About } from "./About.js"
import { Contact } from "./Contact.js"

const home = document.getElementById("home")
const menu = document.getElementById("menu")
const about = document.getElementById("about")
const contact = document.getElementById("contact")

const modules = {
    Home,
    Menu,
    About,
    Contact,
}
const buttons = [home, menu, about, contact]
buttons.forEach(btn => {
    btn.addEventListener("click", clickBtn)
})

function clickBtn(e) {
    removePreviousTab()
    for (const btn of buttons) {
        btn.classList = ""
    }
    e.target.classList.add("shadow")
    const btnClicked = e.target.textContent
    const title = `${btnClicked.slice(0, 1).toUpperCase()}${btnClicked.slice(1).toLowerCase()}`
    for (const [key, value] of Object.entries(modules)) {
        if (title === key) {
            value()
        }
    }
    return;

}

function removePreviousTab() {
    const container = document.getElementById("content")
    container.innerHTML = ""
    container.style = ""
    container.classList = ""
}

function firstTime() {
    let check = 0
    if (check < 1) Home()
    check++
}

firstTime()
home.classList.add("shadow")