let bt1 = document.getElementById('btn1');
let bt2 = document.getElementById('btn2');
let info1 = document.getElementById('info1');
let info2 = document.getElementById('info2');
let info3 = document.getElementById('info3');
  
    


btn2.addEventListener("click", () => {
    let infosActive = document.querySelector(".infos.active");
        infosActive.classList.remove("active");
        infosActive.nextElementSibling.classList.add("active"); 
    
    if (info3.className === "infos active") 
        bt2.style.display = "none";
    else if (info2.className === "infos active") 
        bt2.style.display = "block";
    else if (info1.className === "infos active") 
        bt2.style.display = "block";

        if (info3.className === "infos active") 
        bt1.style.display = "block";
    else if (info2.className === "infos active") 
        bt1.style.display = "block";
    else if (info1.className === "infos active") 
        bt1.style.display = "none";
        

    
});


btn1.addEventListener("click", () => {
    let infosActive = document.querySelector(".infos.active");
        infosActive.classList.remove("active");
        infosActive.previousElementSibling.classList.add("active");
        
    if (info3.className === "infos active")
        bt2.style.display = "none";
    else if (info2.className === "infos active")
        bt2.style.display = "block";
    else if (info1.className === "infos active")
        bt2.style.display = "block";

        if (info3.className === "infos active")
        bt1.style.display = "block";
    else if (info2.className === "infos active")
        bt1.style.display = "block";
    else if (info1.className === "infos active")
        bt1.style.display = "none";
        
});





