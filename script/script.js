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

const isScrolling = () => {
    const headerEl = document.querySelector('header')
    let windowPosition = window.scrollY > 635
    headerEl.classList.toggle('active', windowPosition)
}
window.addEventListener('scroll', isScrolling)

var swiper = new Swiper(".carousel", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  })

const modal = document.querySelector(".modal-wrapper")


function modal_close() {
  modal.style = "display: none"
}

function open_modal() {
  modal.style = "display: block";
}
