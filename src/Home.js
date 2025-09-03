export function Home() {
    tabGen()
    tab1Content()
    tab2Content()
    tab3Content()
} 

function tabGen() {
    let check = 1
    for (let i = 0; i < 3; i++) {
        const tab = document.createElement("div")
        tab.classList.add("tab");
        tab.classList.add(`tab${check}`)
        check++;
        DomControl().container.appendChild(tab)
    }
}

function DomControl() {
    const container = document.querySelector("#content")
    const tab1 = document.querySelector(".tab1")
    const tab2 = document.querySelector(".tab2")
    const tab3 = document.querySelector(".tab3")
    container.classList.add("content")

    return { container, tab1, tab2, tab3 }
}

function tab1Content() {
    const tab = DomControl().tab1
    const sec1 = document.createElement("div")
    const sec2 = document.createElement("div")
    sec2.classList.add("last-child")
    sec1.textContent = "Tropical Twist Café serves the freshest tropical delights! The vibrant ambiance and warm hospitality make you feel like you're sipping paradise by the beach! This is exactly the kind of place you would love to visit again and again."
    sec2.textContent = "-Citrus Seeker"
    tab.append(sec1, sec2)
}

function tab2Content() {
    const tab = DomControl().tab2

    const days = ["Hours","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayElement = days.map((day, index) => {
        const element = document.createElement("div")
        element.textContent = days[index]
        if (!["Hours", "Sunday", "Saturday"].includes(element.textContent)) {
            element.textContent += ": 7AM - 7PM"
        } else if (element.textContent === "Sunday") {
            element.textContent += ": 8AM - 8PM"
        } else if (element.textContent === "Saturday") {
            element.textContent += ": 8AM - 8PM"
            element.classList.add("Saturday")
        } else {
            element.classList.add("Hours")
        }
        return element;

    })
    const [Hours, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday] = dayElement
    tab.append(Hours, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
}

function tab3Content() {
    const tab = DomControl().tab3

    const Location = document.createElement("div")
    const addr = document.createElement("div")
    const areaCode = document.createElement("div")

    Location.textContent ="LOCATION"
    addr.textContent = "2005 Kalia Road, Honolulu, Hawaii"
    areaCode.textContent = "HI 96815"

    tab.append(Location, addr, areaCode)
}

