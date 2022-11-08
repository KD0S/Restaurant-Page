import loadHeader from "./header";
import loadTabs from "./tabs";
import homeLoader from "./home";
import menu from "./menu";

loadHeader()
loadTabs()

const content = document.querySelector('#content')
const main = document.createElement('div')
content.appendChild(main)
main.classList.add("main")

const homeBtn = document.querySelector('#homeBtn')
const menuBtn = document.querySelector('#menuBtn')
const contactBtn = document.querySelector('#contactBtn')

homeBtn.addEventListener('click', ()=>{
    while (main.firstChild) {
        main.removeChild(main.lastChild);
      }
    main.appendChild(homeLoader())
})

contactBtn.addEventListener('click', ()=>{
    console.log("Contact")
})

menuBtn.addEventListener('click', ()=>{
    while (main.firstChild) {
        main.removeChild(main.lastChild);
      }
    main.appendChild(menu())
})