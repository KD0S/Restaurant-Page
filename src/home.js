function home() {
    const element = document.createElement('div')
    const para = document.createElement('p')
    para.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero delectus laboriosam nihil vero doloremque temporibus est iusto odit nesciunt. Dolor est asperiores alias sunt assumenda. Veritatis officia ab error porro."
    element.appendChild(para)
    element.classList.add('home')

    return element
}


export default home