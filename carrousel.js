let bt1 = document.getElementById('btn1');
let bt2 = document.getElementById('btn2');
let info1 = document.getElementById('info1');
let info2 = document.getElementById('info2');
let info3 = document.getElementById('info3');

  
    


btn2.addEventListener("click", () => {
    let infosActive = document.querySelector(".infos.info-active");
        infosActive.classList.remove("info-active");
        infosActive.nextElementSibling.classList.add("info-active"); 
    
        if (info3.className === "infos info-active") 
            bt2.style.display = "none";
        else if (info2.className === "infos info-active") 
            bt2.style.display = "block";
        else if (info1.className === "infos info-active") 
            bt2.style.display = "block";

        if (info3.className === "infos info-active") 
            bt1.style.display = "block";
        else if (info2.className === "infos info-active") 
            bt1.style.display = "block";
        else if (info1.className === "infos info-active") 
            bt1.style.display = "none";  
          
        if (info3.className === "infos info-active")
            containerInfos.style.marginRight = "77px";
        else if (info2.className === "infos info-active")
            containerInfos.style.margin = "0";
        else if (info1.className === "infos info-active") 
            containerInfos.style.marginLeft = "77px";
});


btn1.addEventListener("click", () => {
    let infosActive = document.querySelector(".infos.info-active");
        infosActive.classList.remove("info-active");
        infosActive.previousElementSibling.classList.add("info-active");
        
    if (info3.className === "infos info-active")
        bt2.style.display = "none";
    else if (info2.className === "infos info-active")
        bt2.style.display = "block";
    else if (info1.className === "infos info-active")
        bt2.style.display = "block";

        if (info3.className === "infos info-active")
        bt1.style.display = "block";
    else if (info2.className === "infos info-active")
        bt1.style.display = "block";
    else if (info1.className === "infos info-active")
        bt1.style.display = "none";

        if (info3.className === "infos info-active")
            containerInfos.style.marginRight = "77px";
        else if (info2.className === "infos info-active")
            containerInfos.style.margin = "0";
        else if (info1.className === "infos info-active") 
            containerInfos.style.marginLeft = "77px";
        
});





