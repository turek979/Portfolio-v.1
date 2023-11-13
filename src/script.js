// Writing the intro section
let messageArray = ["I'm Jacob and I'm a Junior Front End developer"];
let textPosition = 0;
const speed = 50;

typewriter = () => {
    document.querySelector("#im").
    innerHTML = messageArray[0].substring(0, textPosition) + '<span class="blinker"> |</span>';

    if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);

// TODO Animater photo border
// window.addEventListener("load", function () {
    
//     const border = document.querySelector(".photo");

//     border.style.transform = "rotate(360deg)";
// });

//TODO Jumping icons upon seeing content
const gridContainer = document.querySelector('.grid-container');
gridContainer.addEventListener('click', function (){
    for (let i = 1; i > 5; i++) {
        const iconJump = document.querySelector(`.icon-${i}`);
        iconJump.classList.add('active');
        console.log('Jump'  + i);
        setTimeout(() => {iconJump.classList.remove('active')}, 1000);
    };
});


//Bio pop up window
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const openModalButton = document.getElementById('openModalButton');
    const heroImage = document.getElementById('heroImage');
    const modalContent = document.querySelector('.modal-content');

    openModalButton.addEventListener('click', function () {
        modal.classList.add('active');
        heroImage.classList.add('hero');
        modalContent.classList.add('active');
    });

    modal.addEventListener('click', function (event) {
        if (event.target === modal || event.target.classList.contains('close')) {
            modal.classList.remove('active');
            heroImage.classList.remove('hero');
            modalContent.classList.remove('active');
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            heroImage.classList.remove('hero');
            modalContent.classList.remove('active');
        }
    });
});
