let bt1 = document.getElementById('btn1');
let bt2 = document.getElementById('btn2');
let info1 = document.getElementById('info1');
let info2 = document.getElementById('info2');
let info3 = document.getElementById('info3');

    function pointActive (){

        if (info3.className === "infos info-active") {
            pt1.style.opacity = "0.4";
            pt1.style.transform = "scale(1)";
            pt2.style.opacity = "0.4";
            pt2.style.transform = "scale(1)";
            pt3.style.opacity = "1";
            pt3.style.transform = "scale(1.1)";  
        } else if (info2.className === "infos info-active") {
            pt1.style.opacity = "0.4";
            pt1.style.transform = "scale(1)";
            pt2.style.opacity = "1";
            pt2.style.transform = "scale(1.1)";
            pt3.style.opacity = "0.4";
            pt3.style.transform = "scale(1)";
        } else if (info1.className === "infos info-active") {
            pt1.style.opacity = "1";
            pt1.style.transform = "scale(1.1)";
            pt2.style.opacity = "0.4";
            pt2.style.transform = "scale(1)";
            pt3.style.opacity = "0.4";
            pt3.style.transform = "scale(1)";
    }        
}


    btn2.addEventListener("click", () => {
        let infosActive = document.querySelector(".infos.info-active");
            
            if (info3.className === "infos info-active") {
                infosActive.classList.remove("info-active");
                info1.classList.add("info-active");
            } else if (info2.className === "infos info-active") {
                infosActive.classList.remove("info-active");
                infosActive.nextElementSibling.classList.add("info-active");
            } else if (info1.className === "infos info-active") {
                infosActive.classList.remove("info-active");
                infosActive.nextElementSibling.classList.add("info-active");
        }
    
        pointActive ();           
});

    btn1.addEventListener("click", () => {
        let infosActive = document.querySelector(".infos.info-active");
       
            if (info3.className === "infos info-active") {
                infosActive.classList.remove("info-active");
                infosActive.previousElementSibling.classList.add("info-active"); 
            } else if (info2.className === "infos info-active") {
                infosActive.classList.remove("info-active");
                infosActive.previousElementSibling.classList.add("info-active"); 
            } else if (info1.className === "infos info-active") {
                infosActive.classList.remove("info-active");
                info3.classList.add("info-active");
        }
        pointActive ();
});

    pt1.addEventListener("click", () => {
        let infosActive = document.querySelector(".infos.info-active");
            infosActive.classList.remove("info-active");
            info1.classList.add("info-active");

        pointActive ();
});        

    pt3.addEventListener("click", () => {
        let infosActive = document.querySelector(".infos.info-active");
            infosActive.classList.remove("info-active");
            info3.classList.add("info-active");
               
        pointActive ();
});

    pt2.addEventListener("click", () => {
        let infosActive = document.querySelector(".infos.info-active");
            infosActive.classList.remove("info-active");
            info2.classList.add("info-active");
            
        pointActive ();
});