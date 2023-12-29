//your JS code here. If required.
const openBtn = document.querySelector("#openModal")
const closeBtn = document.querySelector(".close-modal")
const modal = document.querySelector(".modal")

openBtn.addEventListener("click", ()=>{
    modal.classList.remove("hide");
    openBtn.classList.add("hide");
})  

const closeModal = ()=>{
    modal.classList.add("hide");
    openBtn.classList.remove("hide");
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
