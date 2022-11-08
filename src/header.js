
function header() {
    const element = document.createElement('div')
    
    const heading = document.createElement('h1')
    heading.textContent = "Feastaurant"
    element.appendChild(heading)

    return element
}

function loadHeader() {
    const content = document.getElementById("content")
    content.appendChild(header())
}

export default loadHeader
