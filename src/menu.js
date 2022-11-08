function menu() {
    const element = document.createElement('div')
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    const li3 = document.createElement('li')
    const li4 = document.createElement('li')

    li1.textContent = '🍗 Chicken Biriyani'
    li2.textContent = '🌯 Burrito'
    li3.textContent = '🍔 Burger'
    li4.textContent = '🍰 Cake'
    
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    
    element.appendChild(ul)
    element.classList.add('home')

    return element
}


export default menu