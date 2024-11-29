var menuIcon = document.querySelector("#menu-icons");
var navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("ri-xrp-fill");
    navbar.classList.toggle("active");
}


window.onscroll = ()=>{
    menuIcon.classList.remove("ri-xrp-fill");
    navbar.classList.remove("active");

}