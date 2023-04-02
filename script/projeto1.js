const open = document.querySelector(".open-sidebar")
const close = document.querySelector(".close-sidebar")
const sidebar = document.querySelector("#sidebar-menu").classList
const navbar = document.querySelector("header").classList

open.addEventListener("click",function() {
    sidebar.toggle("opened");
    sidebar.toggle("closed")
    navbar.toggle("hidden")
})

close.addEventListener("click",function() {
    sidebar.toggle("opened");
    sidebar.toggle("closed");
    navbar.toggle("hidden")
})