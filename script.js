let messageArray = ["I'm Jacob and I'm a Junior Front End developer"];
let textPosition = 0;
let speed = 50;

typewriter = () => {
    document.querySelector("#im").
    innerHTML = messageArray[0].substring(0, textPosition) + '<span class="blinker"> |</span>';

    if(textPosition++ != messageArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);
