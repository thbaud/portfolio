let bt1 = document.getElementById('btn1');
let info1 = document.getElementById('info1');

function hide () {
    if(info1.className === ".infos.active") {
        bt1.style.display = "none";
    } else {
        bt1.style.display = "block";
    }
};

btn2.addEventListener("click", () => {
    
    let infosActive = document.querySelector(".infos.active");
            infosActive.classList.remove("active");
            infosActive.nextElementSibling.classList.add("active");
        
    
});

btn1.addEventListener("click", () => {
    
    let infosActive = document.querySelector(".infos.active");
            infosActive.classList.remove("active");
            infosActive.previousElementSibling.classList.add("active");
        
    
});




