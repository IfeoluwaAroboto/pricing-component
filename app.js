let toggle = document.querySelector(".toggle");
let box1 = document.querySelector(".boxes")
let box2=document.querySelector(".box")
toggle.addEventListener("input", ()=>{
    if (box1.classList.contains("show-boxes")) {
          box1.classList.remove("show-boxes");
          box2.style.display = "none"
        } else {
          box1.classList.add("show-boxes");
          box2.style.display = "block"
        }
})