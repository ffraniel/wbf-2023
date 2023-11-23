const closeNavBtn = document.querySelector(".close-menu");
const openNavBtn = document.querySelector(".menu-btn");
const navigationMenuList = document.querySelector(".nav-list"); 
const links = document.querySelectorAll(".links");

closeNavBtn.addEventListener('click', toggleMenu);

links.forEach(link => {
  console.log("one more")
  link.addEventListener('click', toggleMenu);
})

openNavBtn.addEventListener('click', toggleMenu);


function toggleMenu (e) {
  // check if screen is wider than 720px and if so do it, if not ignorec
  console.log("window size, ", window.screen.width);
  navigationMenuList.classList.toggle("open");
} 