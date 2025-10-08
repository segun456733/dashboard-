const sideMenu = document.querySelector("aside")
const themeToggle = document.querySelector(".theme-toggle")
const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-btn")
menuBtn.addEventListener("click",() => {
   sideMenu.style.display = "block";
})
closeBtn.addEventListener("click",() => {
   sideMenu.style.display = "none";
})

themeToggle.addEventListener("click",() => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggle.querySelector(`span:nth-child(1)`).classList.toggle("active")
themeToggle.querySelector(`span:nth-child(2)`).classList.toggle("active")

})
