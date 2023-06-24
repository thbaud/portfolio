let bt1 = document.getElementById('btn1');
let bt2 = document.getElementById('btn2');
let info1 = document.getElementById('info1');
let info2 = document.getElementById('info2');
let info3 = document.getElementById('info3');

    function flecheHidden() {
            
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
}

    function flecheMargin() {

        if (info3.className === "infos info-active"){
            containerInfos.style.marginRight = "70px";
            containerInfos.style.marginLeft = "0";
        } else if (info2.className === "infos info-active"){
            containerInfos.style.margin = "0";
        } else if (info1.className === "infos info-active"){
            containerInfos.style.marginLeft = "70px";
            containerInfos.style.marginRight = "0";
    }         
}

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
            infosActive.classList.remove("info-active");
            infosActive.nextElementSibling.classList.add("info-active");
            
        flecheHidden();
        flecheMargin();
        pointActive ();           
});

    btn1.addEventListener("click", () => {
        let infosActive = document.querySelector(".infos.info-active");
            infosActive.classList.remove("info-active");
            infosActive.previousElementSibling.classList.add("info-active"); 

        flecheHidden();
        flecheMargin();
        pointActive ();
});

    pt1.addEventListener("click", () => {
        let infosActive = document.querySelector(".infos.info-active");
            infosActive.classList.remove("info-active");
            info1.classList.add("info-active");

        flecheHidden();
        flecheMargin();
        pointActive ();
});        

    pt3.addEventListener("click", () => {
        let infosActive = document.querySelector(".infos.info-active");
            infosActive.classList.remove("info-active");
            info3.classList.add("info-active");
               
        flecheHidden();
        flecheMargin();
        pointActive ();
});

    pt2.addEventListener("click", () => {
        let infosActive = document.querySelector(".infos.info-active");
            infosActive.classList.remove("info-active");
            info2.classList.add("info-active");
            
        flecheHidden();
        flecheMargin();
        pointActive ();
});