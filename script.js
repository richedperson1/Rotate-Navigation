
// const buttonSlide = document.querySelector(".button i");
// const mainContentPage = document.querySelector(".main-content")
// const navBarContent = document.querySelector(".nav-bars")

// buttonSlide.addEventListener("click", rotatePage);

// const markAdd = ["fa-solid fa-bars"]
// function rotatePage() {
//     mainContentPage.classList.toggle("rotate-x")
//     navBarContent.classList.toggle("rotate-x-navbar")

//     console.log(mainContentPage.classList)
// }


const buttonSlide = document.querySelectorAll(".button i");
const mainContentPage = document.querySelector(".main-content");
const navBarContent = document.querySelector(".nav-bars");
const btnCross = document.querySelector(".button");

buttonSlide.forEach((val) => {
    val.addEventListener("click", rotatePage);
});

const markAdd = ["fa-solid fa-bars"]
function rotatePage() {
    mainContentPage.classList.toggle("rotate-x")
    navBarContent.classList.toggle("rotate-x-navbar")

    buttonSlide.forEach((val) => {
        val.classList.toggle("deactive")
    })

}