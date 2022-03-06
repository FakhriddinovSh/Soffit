var hamburger = document.querySelector("#hamburger")
var navbar = document.querySelector(".navbar")

if(hamburger.classList.contains("navbar__nav__list--active")){
    hamburger.classList.remove("navbar__nav__list--active")
    navbar.classList.remove("navbar__nav__list--active")
}else{
    hamburger.classList.add("navbar__nav__list--active")
    navbar.classList.add("navbar__nav__list--active")
}