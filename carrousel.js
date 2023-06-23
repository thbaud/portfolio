btn2.addEventListener("click", () => {
    
    let infosActive = document.querySelectorAll(".infos.active");
        infosActive.classList.remove("active");
        infosActive.nextElementSibling.add("active");
    
});

