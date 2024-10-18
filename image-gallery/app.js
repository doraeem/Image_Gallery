let images = document.querySelectorAll(".img-div img");
let showImage = document.querySelector(".show-image");
let fullImage = document.querySelector("#full-image");

images.forEach((img) => {
    img.addEventListener("click", ()=>{
        fullImage.src = img.src;
        showImage.classList.remove("hide");

    });
});

showImage.addEventListener("click", ()=>{
    showImage.classList.add("hide");
});