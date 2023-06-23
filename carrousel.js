let pt1 = document.querySelector('#point1');
let pt2 = document.querySelector('#point2');
let pt3 = document.querySelector('#point3');
let infos = document.querySelectorAll("infos");
let btns = document.querySelector('.boutons');
let btn1 = document.querySelector('#bouton1');
let btn2 = document.querySelector('#bouton2');


btn2.addEventListener("click", () => {
    
    infos.getElementsByClassName("active");
    infos.remove("active");
    infos.nextElementSibling.add("active");

});

