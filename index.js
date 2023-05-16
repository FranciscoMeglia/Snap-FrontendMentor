// BUTTONS NAV TOGGLES
const cont = document.getElementById("features")
const ul = document.getElementById("ulF")

cont.addEventListener("click" , () => {
    ul.classList.toggle("show")
})

const cont2 = document.getElementById("company")
const ul2 = document.getElementById("ulC")

cont2.addEventListener("click" , () => {
    ul2.classList.toggle("show")
})

//NAV BAR OPEN and CLOSE
const openNav = document.getElementById("openNav")
const nav = document.getElementById("nav")
const html = document.body 

openNav.addEventListener("click" , () => {
    nav.classList.toggle("navMobile")

    if (nav.className == "navMobile") {
        html.style.overflow = "hidden"
    } else {
        html.style.overflow = "scroll"
    }
  
})