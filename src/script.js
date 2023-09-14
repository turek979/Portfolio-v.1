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

window.addEventListener("load", function () {
    
    const border = document.querySelector(".myPhoto");

    border.style.transform = "rotate(360deg)";
});