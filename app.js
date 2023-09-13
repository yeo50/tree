let bars =document.querySelector("#bars");
let navLinks=document.querySelector(".a-link");
bars.addEventListener("click", function() {
    navLinks.classList.toggle("show");
    bars.classList.toggle("fa-times")
});