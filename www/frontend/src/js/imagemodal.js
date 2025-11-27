let modal = document.querySelector("#imageModal");
let modalImage = document.querySelector("#modalImage");
let closeModal = document.querySelector("#closeModal");

//open
document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
        modalImage.src = img.src;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    });
});

//close
closeModal.addEventListener("click", () =>{
    modal.classList.add("hidden");
    modal.classList.remove("flex");
});

//close2
modal.addEventListener("click", (e) =>{
    if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    };
});
