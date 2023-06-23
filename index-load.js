let titreSpans = document.querySelectorAll('h1 span');
let medias = document.querySelectorAll('.bulle');
let l1 = document.querySelector('.l1');
let l2 = document.querySelector('.l2');
let l3 = document.querySelector('.l3');
let l4 = document.querySelector('.l4');
let containerInfos = document.querySelector('.container-infos');
let btns = document.querySelector('.boutons');
let btn1 = document.querySelector('#bouton1');
let btn2 = document.querySelector('#bouton2');
let pt1 = document.querySelector('#point1');
let pt2 = document.querySelector('#point2');
let pt3 = document.querySelector('#point3');

 

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});
        
        TL
        .staggerFrom(medias, 0.8, {left: -200, ease: "power2.out"}, -0.4)
        .from(l1, 2, {width: 0, ease: "power2.out"}, '')
        .from(l4, 2, {width: 0, ease: "power2.out"}, '')
        .from(l2, 4, {width: 0, ease: "power2.out"}, '')
        .from(l3, 4, {width: 0, ease: "power2.out"}, '')
        .staggerFrom(titreSpans, 0.6, {top: -400, opacity: 0, ease: "power2.out"}, 0.3,"0.5")
        .staggerFrom(containerInfos, 3, {bottom: 800, opacity: 0, ease: "power2.out"},-0.3,"-=3")
        .staggerFrom(btn1, 1, {left: -800, ease: "power2.out"}, -0.2,"-=3.5")
        .staggerFrom(btn2, 1, {right: -800, ease: "power2.out"}, -0.2, "-=3.5")
        .staggerFrom(pt1, 1, {bottom: -100, opacity: 0, ease: "power2.out"}, -0.2, "-=3.5")
        .staggerFrom(pt2, 1, {bottom: -100, opacity: 0, ease: "power2.out"}, -0.2, "-=3.25")
        .staggerFrom(pt3, 1, {bottom: -100, opacity: 0, ease: "power2.out"}, -0.2, "-=3");

        TL.play();

     });