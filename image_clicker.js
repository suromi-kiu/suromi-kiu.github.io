function openImage(img){
    const viewer = document.getElementById("image-viewer");
    const fullscreen = document.getElementById("fullscreen-img");

    fullscreen.src = img.src;
    viewer.style.display = "flex";
}

function closeImage(){
    document.getElementById("image-viewer").style.display = "none";
}

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeImage();
    }
});

