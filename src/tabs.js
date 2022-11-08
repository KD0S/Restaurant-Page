function tabs() {
    const element = document.createElement('div')
    
    const homeBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const contactBtn = document.createElement('button')
    
    homeBtn.id="homeBtn"
    contactBtn.id="contactBtn"
    menuBtn.id="menuBtn"

    homeBtn.textContent = "Home"
    menuBtn.textContent = "Menu"
    contactBtn.textContent = "Contact"

    element.appendChild(homeBtn)
    element.appendChild(menuBtn)
    element.appendChild(contactBtn)
   
    element.classList.add("tabs")
    return element
}

function loadTabs() {
    const content = document.getElementById("content")
    content.appendChild(tabs())
}

export default loadTabs