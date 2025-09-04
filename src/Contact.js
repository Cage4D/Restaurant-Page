export function Contact() {
    tabGen()
    Contacts()
}

function tabGen() {
    let check = 1
    for (let i = 0; i < 3; i++) {
        const tab = document.createElement("div")
        tab.classList.add("tab");
        tab.classList.add(`contact${check}`)
        check++;
        DomControl().container.appendChild(tab)
    }
}

function DomControl() {
    const container = document.querySelector("#content")
    const tab1 = document.querySelector(".contact1")
    const tab2 = document.querySelector(".contact2")
    const tab3 = document.querySelector(".contact3")

    return { container, tab1, tab2, tab3 }
}

function Contacts() {
    const tab1 = DomControl().tab1
    const tab2 = DomControl().tab2
    const tab3 = DomControl().tab3

    let section = []
    for (let i = 0; i < 3; i++) {
        const name = document.createElement("div");
        name.classList.add("name")
        const post = document.createElement("div");
        const number = document.createElement("div")
        const mail = document.createElement("div")
        section.push(name, post, number, mail)
    }
    const [name1, p1, num1, mail1, name2, p2, num2, mail2, name3, p3, num3, mail3] = section;

    name1.textContent = "Name: Lani Kealoha"
    p1.textContent = "Post: Head Chef"
    num1.textContent = "+1-808-555-0123"
    mail1.textContent = "lani@tropicaltwistcafe.com"

    name2.textContent = "Name: Kai Nakamura"
    p2.textContent = "Post: Manager"
    num2.textContent = "+1-808-555-0456"
    mail2.textContent = "kai@tropicaltwistcafe.com"

    name3.textContent = "Name: Leilani Ho"
    p3.textContent = "Post: Head Waitress"
    num3.textContent = " +1-808-555-0789"
    mail3.textContent = "leilani@tropicaltwistcafe.com"

    tab1.append(name1, p1, num1, mail1)
    tab2.append(name2, p2, num2, mail2)
    tab3.append(name3, p3, num3, mail3)
}